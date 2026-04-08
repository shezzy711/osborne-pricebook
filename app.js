(function () {
    'use strict';

    // ── State ──
    var state = {
        selectedJobId: null,
        selectedTier: null,
        photoDataUrl: null,
        voiceBlob: null,
        voiceDuration: 0
    };

    // ── DOM refs ──
    var els = {};

    // ── Init ──
    function init() {
        els.viewHome = document.getElementById('view-home');
        els.viewPricing = document.getElementById('view-pricing');
        els.viewSummary = document.getElementById('view-summary');
        els.jobSearch = document.getElementById('job-search');
        els.jobSelect = document.getElementById('job-select');
        els.btnGetPricing = document.getElementById('btn-get-pricing');
        els.btnPhoto = document.getElementById('btn-photo');
        els.photoInput = document.getElementById('photo-input');
        els.photoPreview = document.getElementById('photo-preview');
        els.photoThumb = document.getElementById('photo-thumb');
        els.btnRemovePhoto = document.getElementById('btn-remove-photo');
        els.btnVoice = document.getElementById('btn-voice');
        els.voiceStatus = document.getElementById('voice-status');
        els.voiceDurationDisplay = document.getElementById('voice-duration-display');
        els.btnRemoveVoice = document.getElementById('btn-remove-voice');
        els.voiceOverlay = document.getElementById('voice-overlay');
        els.recordingTimer = document.getElementById('recording-timer');
        els.btnVoiceStop = document.getElementById('btn-voice-stop');
        els.btnBackHome = document.getElementById('btn-back-home');
        els.tierCards = document.getElementById('tier-cards');
        els.pricingJobName = document.getElementById('pricing-job-name');
        els.pricingJobDesc = document.getElementById('pricing-job-desc');
        els.pricingPhoto = document.getElementById('pricing-photo');
        els.pricingPhotoImg = document.getElementById('pricing-photo-img');
        els.summaryCard = document.getElementById('summary-card');
        els.btnBackPricing = document.getElementById('btn-back-pricing');
        els.btnShare = document.getElementById('btn-share');
        els.btnNewQuote = document.getElementById('btn-new-quote');
        els.toast = document.getElementById('toast');

        populateDropdown();
        bindEvents();
    }

    // ── Dropdown ──
    function populateDropdown(filter) {
        var select = els.jobSelect;
        var currentVal = select.value;

        // Remove all optgroups and their options
        select.querySelectorAll('optgroup').forEach(function (g) { g.remove(); });

        var categories = {};
        var lowerFilter = filter ? filter.toLowerCase().trim() : '';

        PRICEBOOK.jobs.forEach(function (job) {
            if (lowerFilter) {
                var haystack = (job.name + ' ' + job.tags.join(' ')).toLowerCase();
                if (haystack.indexOf(lowerFilter) === -1) return;
            }
            if (!categories[job.category]) categories[job.category] = [];
            categories[job.category].push(job);
        });

        Object.keys(categories).forEach(function (cat) {
            var group = document.createElement('optgroup');
            group.label = cat;
            categories[cat].forEach(function (job) {
                var opt = document.createElement('option');
                opt.value = job.id;
                opt.textContent = job.name;
                group.appendChild(opt);
            });
            select.appendChild(group);
        });

        // Restore selection if still present
        if (currentVal) {
            select.value = currentVal;
            if (!select.value) {
                select.value = '';
                state.selectedJobId = null;
                els.btnGetPricing.disabled = true;
            }
        }
    }

    // ── Events ──
    function bindEvents() {
        var searchTimeout;
        els.jobSearch.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () {
                populateDropdown(els.jobSearch.value);
            }, 150);
        });

        els.jobSelect.addEventListener('change', function () {
            state.selectedJobId = this.value || null;
            els.btnGetPricing.disabled = !state.selectedJobId;
        });

        els.btnGetPricing.addEventListener('click', function () {
            if (!state.selectedJobId) return;
            renderPricing(state.selectedJobId);
            showView('pricing');
        });

        // Photo
        els.btnPhoto.addEventListener('click', function () {
            els.photoInput.click();
        });

        els.photoInput.addEventListener('change', function (e) {
            handlePhotoCapture(e);
        });

        els.btnRemovePhoto.addEventListener('click', function () {
            state.photoDataUrl = null;
            els.photoPreview.hidden = true;
            els.photoInput.value = '';
        });

        // Voice
        els.btnVoice.addEventListener('click', function () {
            startVoiceRecording();
        });

        els.btnVoiceStop.addEventListener('click', function () {
            stopVoiceRecording();
        });

        els.btnRemoveVoice.addEventListener('click', function () {
            state.voiceBlob = null;
            state.voiceDuration = 0;
            els.voiceStatus.hidden = true;
        });

        // Pricing view
        els.btnBackHome.addEventListener('click', function () {
            showView('home');
        });

        els.tierCards.addEventListener('click', function (e) {
            var btn = e.target.closest('.tier-select-btn');
            if (!btn) return;
            var tier = btn.getAttribute('data-tier');
            state.selectedTier = tier;
            renderSummary(state.selectedJobId, tier);
            showView('summary');
        });

        // Summary
        els.btnBackPricing.addEventListener('click', function () {
            showView('pricing');
        });

        els.btnShare.addEventListener('click', function () {
            handleShare();
        });

        els.btnNewQuote.addEventListener('click', function () {
            resetState();
            showView('home');
        });
    }

    // ── Views ──
    function showView(name) {
        [els.viewHome, els.viewPricing, els.viewSummary].forEach(function (v) {
            v.classList.remove('active');
        });
        var target = name === 'home' ? els.viewHome :
                     name === 'pricing' ? els.viewPricing : els.viewSummary;
        target.classList.add('active');
        window.scrollTo(0, 0);
    }

    // ── Render Pricing ──
    function renderPricing(jobId) {
        var job = findJob(jobId);
        if (!job) return;

        els.pricingJobName.textContent = job.name;
        els.pricingJobDesc.textContent = job.description;

        if (state.photoDataUrl) {
            els.pricingPhotoImg.src = state.photoDataUrl;
            els.pricingPhoto.hidden = false;
        } else {
            els.pricingPhoto.hidden = true;
        }

        var tiers = ['good', 'better', 'best'];
        var html = '';

        tiers.forEach(function (tier) {
            var tierData = job[tier];
            var tierMeta = PRICEBOOK.tiers[tier];
            var isRecommended = tier === 'better';

            html += '<div class="tier-card tier-' + tier + '">' +
                '<div class="tier-header">' +
                    '<span class="tier-label">' + tierMeta.label + '</span>' +
                    (isRecommended ? '<span class="recommended-badge">RECOMMENDED</span>' : '') +
                '</div>' +
                '<p class="tier-tagline">' + tierMeta.tagline + '</p>' +
                '<div class="tier-price">' + formatCurrency(tierData.price) + '</div>' +
                '<div class="tier-meta">' +
                    '<span>~' + tierData.laborHours + ' hrs</span>' +
                    '<span>' + tierMeta.warranty + '</span>' +
                '</div>' +
                '<p class="tier-solution">' + PRICEBOOK.solutions[tier] + '</p>' +
                '<button type="button" class="tier-select-btn" data-tier="' + tier + '">Select ' + tierMeta.label + '</button>' +
            '</div>';
        });

        els.tierCards.innerHTML = html;
    }

    // ── Render Summary ──
    function renderSummary(jobId, tier) {
        var job = findJob(jobId);
        if (!job) return;

        var tierData = job[tier];
        var tierMeta = PRICEBOOK.tiers[tier];

        var html = '<div class="summary-job-name">' + job.name + '</div>' +
            '<span class="summary-tier-badge" style="background:' + tierMeta.color + '">' + tierMeta.label + '</span>' +
            '<div class="summary-price">' + formatCurrency(tierData.price) + '</div>' +
            '<div class="summary-details">' +
                '<div class="summary-detail">' +
                    '<span class="summary-detail-label">Warranty</span>' +
                    '<span class="summary-detail-value">' + tierMeta.warranty + '</span>' +
                '</div>' +
                '<div class="summary-detail">' +
                    '<span class="summary-detail-label">Est. Labor</span>' +
                    '<span class="summary-detail-value">~' + tierData.laborHours + ' hours</span>' +
                '</div>' +
                '<div class="summary-detail">' +
                    '<span class="summary-detail-label">Labor Rate</span>' +
                    '<span class="summary-detail-value">' + formatCurrency(PRICEBOOK.laborRate) + '/hr</span>' +
                '</div>' +
            '</div>' +
            '<div class="summary-scope">' +
                '<div class="summary-scope-label">Scope</div>' +
                '<div>' + PRICEBOOK.solutions[tier] + '</div>' +
            '</div>';

        // Attachments
        var attachments = [];
        if (state.photoDataUrl) attachments.push('&#128247; Photo attached');
        if (state.voiceBlob) attachments.push('&#127908; Voice note (' + formatTime(state.voiceDuration) + ')');

        if (attachments.length) {
            html += '<div class="summary-attachments">' + attachments.join(' &middot; ') + '</div>';
        }

        els.summaryCard.innerHTML = html;
    }

    // ── Photo ──
    function handlePhotoCapture(e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;

        var reader = new FileReader();
        reader.onload = function (ev) {
            state.photoDataUrl = ev.target.result;
            els.photoThumb.src = state.photoDataUrl;
            els.photoPreview.hidden = false;
        };
        reader.readAsDataURL(file);
    }

    // ── Voice Recording ──
    var mediaRecorder = null;
    var audioChunks = [];
    var timerInterval = null;
    var timerStart = 0;

    function startVoiceRecording() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showToast('Voice recording not supported on this browser');
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];

                mediaRecorder.ondataavailable = function (e) {
                    audioChunks.push(e.data);
                };

                mediaRecorder.onstop = function () {
                    state.voiceBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    stream.getTracks().forEach(function (t) { t.stop(); });
                };

                mediaRecorder.start();
                timerStart = Date.now();
                els.recordingTimer.textContent = '0:00';
                els.voiceOverlay.hidden = false;

                timerInterval = setInterval(function () {
                    var elapsed = Math.floor((Date.now() - timerStart) / 1000);
                    els.recordingTimer.textContent = formatTime(elapsed);
                }, 1000);
            })
            .catch(function () {
                showToast('Microphone access denied');
            });
    }

    function stopVoiceRecording() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        clearInterval(timerInterval);
        state.voiceDuration = Math.floor((Date.now() - timerStart) / 1000);
        els.voiceOverlay.hidden = true;

        els.voiceDurationDisplay.textContent = formatTime(state.voiceDuration);
        els.voiceStatus.hidden = false;
    }

    // ── Share ──
    function handleShare() {
        var job = findJob(state.selectedJobId);
        var tierMeta = PRICEBOOK.tiers[state.selectedTier];
        var tierData = job[state.selectedTier];

        var text = 'Osborne Plumbing \u2014 ' + job.name + ' (' + tierMeta.label + '): ' +
            formatCurrency(tierData.price) + ' \u2014 ' + tierMeta.warranty +
            '. Call (704) 858-3965';

        if (navigator.share) {
            navigator.share({ title: 'Osborne Plumbing Quote', text: text })
                .catch(function () {});
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function () {
                showToast('Copied to clipboard');
            });
        } else {
            showToast('Share not available');
        }
    }

    // ── Reset ──
    function resetState() {
        state.selectedJobId = null;
        state.selectedTier = null;
        state.photoDataUrl = null;
        state.voiceBlob = null;
        state.voiceDuration = 0;

        els.jobSelect.value = '';
        els.jobSearch.value = '';
        els.btnGetPricing.disabled = true;
        els.photoPreview.hidden = true;
        els.photoInput.value = '';
        els.voiceStatus.hidden = true;

        populateDropdown();
    }

    // ── Helpers ──
    function findJob(id) {
        for (var i = 0; i < PRICEBOOK.jobs.length; i++) {
            if (PRICEBOOK.jobs[i].id === id) return PRICEBOOK.jobs[i];
        }
        return null;
    }

    function formatCurrency(n) {
        return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function formatTime(seconds) {
        var m = Math.floor(seconds / 60);
        var s = seconds % 60;
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function showToast(msg) {
        els.toast.textContent = msg;
        els.toast.hidden = false;
        els.toast.classList.add('show');
        setTimeout(function () {
            els.toast.classList.remove('show');
            setTimeout(function () { els.toast.hidden = true; }, 300);
        }, 2000);
    }

    // ── Boot ──
    document.addEventListener('DOMContentLoaded', init);
})();
