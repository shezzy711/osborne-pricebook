window.PRICEBOOK = {
  tiers: {
    good:   { label: "Good",   tagline: "Fix it now",      warranty: "3-month warranty",  color: "#4CAF50" },
    better: { label: "Better", tagline: "Fix it right",    warranty: "12-month warranty", color: "#2196F3" },
    best:   { label: "Best",   tagline: "Fix it for good", warranty: "24-month warranty", color: "#FF9800" }
  },

  solutions: {
    good:   "Resolve immediate issue with standard parts and workmanship.",
    better: "Resolve root cause with upgraded parts and longer coverage.",
    best:   "Future-proof solution with premium scope and maximum coverage."
  },

  laborRate: 95.00,

  jobs: [
    // ── Fixtures (8) ──
    { id: "ir_faucet_repair", category: "Fixtures", name: "Faucet Replacement", description: "Repair or replace leaking faucet and reconnect fittings", tags: ["faucet","fixture","leak","replace"], good: { price: 139.50, laborHours: 0.9, warranty: 3 }, better: { price: 223.20, laborHours: 1.4, warranty: 12 }, best: { price: 379.44, laborHours: 2.4, warranty: 24 } },
    { id: "ir_toilet_replacement", category: "Fixtures", name: "Toilet Replacement", description: "Replace toilet and reset seals and water connection points", tags: ["toilet","fixture","replace"], good: { price: 276.67, laborHours: 1.7, warranty: 3 }, better: { price: 442.67, laborHours: 2.8, warranty: 12 }, best: { price: 752.54, laborHours: 4.8, warranty: 24 } },
    { id: "ir_disposal_replacement", category: "Fixtures", name: "Garbage Disposal Replacement", description: "Replace jammed or failed garbage disposal unit", tags: ["garbage","disposal","replace"], good: { price: 283.61, laborHours: 1.8, warranty: 3 }, better: { price: 418.33, laborHours: 2.6, warranty: 12 }, best: { price: 553.06, laborHours: 3.5, warranty: 24 } },
    { id: "ir_sink_install", category: "Fixtures", name: "Sink Installation", description: "Install sink fixture and verify proper sealing and drainage", tags: ["sink","fixture","install"], good: { price: 214.00, laborHours: 1.4, warranty: 3 }, better: { price: 342.40, laborHours: 2.2, warranty: 12 }, best: { price: 582.08, laborHours: 3.7, warranty: 24 } },
    { id: "ir_shower_valve_replace", category: "Fixtures", name: "Shower Valve Replacement", description: "Replace shower valve and rebalance flow and temperature", tags: ["shower","valve","replace"], good: { price: 225.00, laborHours: 1.4, warranty: 3 }, better: { price: 360.00, laborHours: 2.3, warranty: 12 }, best: { price: 575.00, laborHours: 3.6, warranty: 24 } },
    { id: "ir_bathtub_install", category: "Fixtures", name: "Bathtub Installation", description: "Install bathtub and complete fixture and drain hookups", tags: ["bathtub","tub","install"], good: { price: 750.00, laborHours: 4.7, warranty: 3 }, better: { price: 1200.00, laborHours: 7.6, warranty: 12 }, best: { price: 2040.00, laborHours: 12.0, warranty: 24 } },
    { id: "ir_water_softener_install", category: "Fixtures", name: "Water Softener Installation", description: "Install water softener and test system operation", tags: ["water softener","install"], good: { price: 480.00, laborHours: 3.0, warranty: 3 }, better: { price: 768.00, laborHours: 4.9, warranty: 12 }, best: { price: 1305.60, laborHours: 8.2, warranty: 24 } },
    { id: "ir_toilet_repair", category: "Fixtures", name: "Toilet Repair", description: "Repair toilet fill, flush, seal, or clog-related issues", tags: ["toilet","repair"], good: { price: 100.00, laborHours: 0.6, warranty: 3 }, better: { price: 160.00, laborHours: 1.0, warranty: 12 }, best: { price: 272.00, laborHours: 1.7, warranty: 24 } },

    // ── Drain Services (6) ──
    { id: "ir_kitchen_drain", category: "Drain Services", name: "Kitchen Drain Clearing", description: "Clear kitchen drain obstruction and restore normal flow", tags: ["kitchen","drain","clog"], good: { price: 103.12, laborHours: 0.8, warranty: 3 }, better: { price: 164.99, laborHours: 1.2, warranty: 12 }, best: { price: 278.12, laborHours: 2.0, warranty: 24 } },
    { id: "ir_main_drain", category: "Drain Services", name: "Main Drain Snaking", description: "Snake main line and verify full drainage restoration", tags: ["main line","drain","snaking"], good: { price: 150.00, laborHours: 1.1, warranty: 3 }, better: { price: 240.00, laborHours: 1.8, warranty: 12 }, best: { price: 408.00, laborHours: 3.0, warranty: 24 } },
    { id: "ir_hydro_jet", category: "Drain Services", name: "Hydro Jetting", description: "Hydro-jet line to remove heavy scale and buildup", tags: ["drain","jetting","hydro"], good: { price: 375.00, laborHours: 2.8, warranty: 3 }, better: { price: 600.00, laborHours: 4.4, warranty: 12 }, best: { price: 850.00, laborHours: 6.3, warranty: 24 } },
    { id: "ir_drain_pipe_replacement", category: "Drain Services", name: "Drain Pipe Replacement", description: "Repair or replace damaged drain pipe segments", tags: ["drain","pipe","replacement"], good: { price: 100.00, laborHours: 0.7, warranty: 3 }, better: { price: 160.00, laborHours: 1.2, warranty: 12 }, best: { price: 272.00, laborHours: 2.0, warranty: 24 } },
    { id: "ir_sewer_camera_inspection", category: "Drain Services", name: "Sewer Camera Inspection", description: "Inspect sewer/drain line with camera and provide findings", tags: ["sewer","camera","inspection"], good: { price: 125.00, laborHours: 0.9, warranty: 3 }, better: { price: 200.00, laborHours: 1.5, warranty: 12 }, best: { price: 340.00, laborHours: 2.5, warranty: 24 } },
    { id: "ir_sewer_line_replacement", category: "Drain Services", name: "Sewer Line Replacement", description: "Replace damaged sewer main line and restore service", tags: ["sewer","line","replacement"], good: { price: 2381.67, laborHours: 12.0, warranty: 3 }, better: { price: 3810.67, laborHours: 12.0, warranty: 12 }, best: { price: 6478.14, laborHours: 12.0, warranty: 24 } },

    // ── Pipe Repair (6) ──
    { id: "ir_shutoff_valve", category: "Pipe Repair", name: "Shutoff Valve Replacement", description: "Replace failed shutoff valve with quarter-turn valve", tags: ["shutoff","valve","pipe"], good: { price: 175.00, laborHours: 1.5, warranty: 3 }, better: { price: 240.00, laborHours: 2.0, warranty: 12 }, best: { price: 320.00, laborHours: 2.7, warranty: 24 } },
    { id: "ir_pipe_leak", category: "Pipe Repair", name: "Pipe Leak Repair", description: "Repair leaking supply or drain section and pressure test", tags: ["pipe","leak","repair"], good: { price: 203.75, laborHours: 1.7, warranty: 3 }, better: { price: 326.00, laborHours: 2.7, warranty: 12 }, best: { price: 554.20, laborHours: 4.7, warranty: 24 } },
    { id: "ir_gas_line_repair", category: "Pipe Repair", name: "Gas Line Repair", description: "Repair gas line and verify leak-safe operation", tags: ["gas line","repair"], good: { price: 180.00, laborHours: 1.5, warranty: 3 }, better: { price: 288.00, laborHours: 2.4, warranty: 12 }, best: { price: 489.60, laborHours: 4.1, warranty: 24 } },
    { id: "ir_main_water_line_repair", category: "Pipe Repair", name: "Main Water Line Repair", description: "Repair main water line leak and restore pressure", tags: ["main water line","repair"], good: { price: 400.00, laborHours: 3.4, warranty: 3 }, better: { price: 640.00, laborHours: 5.4, warranty: 12 }, best: { price: 1088.00, laborHours: 9.2, warranty: 24 } },
    { id: "ir_reroute_plumbing", category: "Pipe Repair", name: "Rerouting Plumbing", description: "Reroute plumbing for access, remodel, or damaged lines", tags: ["reroute","plumbing"], good: { price: 700.00, laborHours: 5.9, warranty: 3 }, better: { price: 1100.00, laborHours: 9.3, warranty: 12 }, best: { price: 1500.00, laborHours: 12.0, warranty: 24 } },
    { id: "ir_full_house_repipe", category: "Pipe Repair", name: "Full House Repipe", description: "Replace major in-home plumbing runs with modern piping", tags: ["repipe","whole house"], good: { price: 5798.00, laborHours: 12.0, warranty: 3 }, better: { price: 9276.80, laborHours: 12.0, warranty: 12 }, best: { price: 13542.00, laborHours: 12.0, warranty: 24 } },

    // ── Water Heater (5) ──
    { id: "ir_wheater_tank_install", category: "Water Heater", name: "Tank Water Heater Install", description: "Install tank water heater with code-compliant connections and startup", tags: ["water heater","tank","install"], good: { price: 965.00, laborHours: 10.2, warranty: 3 }, better: { price: 1544.00, laborHours: 12.0, warranty: 12 }, best: { price: 2624.80, laborHours: 12.0, warranty: 24 } },
    { id: "ir_wheater_tankless_install", category: "Water Heater", name: "Tankless Water Heater Install", description: "Install tankless water heater and commission system", tags: ["water heater","tankless","install"], good: { price: 800.00, laborHours: 8.4, warranty: 3 }, better: { price: 1280.00, laborHours: 12.0, warranty: 12 }, best: { price: 2176.00, laborHours: 12.0, warranty: 24 } },
    { id: "ir_wheater_flush", category: "Water Heater", name: "Water Heater Flush", description: "Perform full flush and preventive maintenance", tags: ["water heater","flush","maintenance"], good: { price: 175.00, laborHours: 1.8, warranty: 3 }, better: { price: 240.00, laborHours: 2.5, warranty: 12 }, best: { price: 320.00, laborHours: 3.4, warranty: 24 } },
    { id: "ir_water_heater_repair", category: "Water Heater", name: "Water Heater Repair", description: "Diagnose and repair tank or tankless water heater faults", tags: ["water heater","repair"], good: { price: 150.00, laborHours: 1.6, warranty: 3 }, better: { price: 240.00, laborHours: 2.5, warranty: 12 }, best: { price: 408.00, laborHours: 4.3, warranty: 24 } },
    { id: "ir_gas_valve_replacement", category: "Water Heater", name: "Gas Valve Replacement", description: "Replace water heater gas control valve and test system", tags: ["gas valve","water heater"], good: { price: 150.00, laborHours: 1.6, warranty: 3 }, better: { price: 240.00, laborHours: 2.5, warranty: 12 }, best: { price: 408.00, laborHours: 4.3, warranty: 24 } },

    // ── Pump Services (3) ──
    { id: "ir_sump_pump_install", category: "Pump Services", name: "Sump Pump Installation", description: "Install sump pump and verify discharge operation", tags: ["sump pump","install"], good: { price: 550.00, laborHours: 4.6, warranty: 3 }, better: { price: 750.00, laborHours: 6.3, warranty: 12 }, best: { price: 950.00, laborHours: 8.0, warranty: 24 } },
    { id: "ir_sump_pump_repair", category: "Pump Services", name: "Sump Pump Repair", description: "Repair sump pump and restore pumping performance", tags: ["sump pump","repair"], good: { price: 337.33, laborHours: 2.8, warranty: 3 }, better: { price: 539.73, laborHours: 4.5, warranty: 12 }, best: { price: 790.00, laborHours: 6.7, warranty: 24 } },
    { id: "ir_well_pump_repair", category: "Pump Services", name: "Well Pump Repair", description: "Repair well pump components and restore water delivery", tags: ["well pump","repair"], good: { price: 500.00, laborHours: 4.2, warranty: 3 }, better: { price: 750.00, laborHours: 6.3, warranty: 12 }, best: { price: 1000.00, laborHours: 8.4, warranty: 24 } },

    // ── Emergency (3) ──
    { id: "ir_emergency_leak", category: "Emergency", name: "Burst Pipe Emergency Response", description: "Emergency response to active leak with stabilization and repair", tags: ["emergency","burst","pipe","leak"], good: { price: 175.00, laborHours: 1.7, warranty: 3 }, better: { price: 240.00, laborHours: 2.3, warranty: 12 }, best: { price: 320.00, laborHours: 3.0, warranty: 24 } },
    { id: "ir_emergency_overflow", category: "Emergency", name: "Overflow Emergency Response", description: "Emergency response for overflow event and immediate mitigation", tags: ["emergency","overflow","toilet"], good: { price: 150.00, laborHours: 1.4, warranty: 3 }, better: { price: 240.00, laborHours: 2.3, warranty: 12 }, best: { price: 350.00, laborHours: 3.3, warranty: 24 } },
    { id: "ir_emergency_service_call", category: "Emergency", name: "Emergency Service Call", description: "Urgent dispatch fee and first-hour diagnostics for emergency calls", tags: ["emergency","service","call"], good: { price: 150.00, laborHours: 1.4, warranty: 3 }, better: { price: 240.00, laborHours: 2.3, warranty: 12 }, best: { price: 350.00, laborHours: 3.3, warranty: 24 } },

    // ── Inspection (1) ──
    { id: "ir_plumbing_inspection", category: "Inspection", name: "Plumbing Inspection", description: "Perform plumbing inspection and document findings", tags: ["inspection","plumbing"], good: { price: 125.00, laborHours: 0.7, warranty: 3 }, better: { price: 200.00, laborHours: 1.1, warranty: 12 }, best: { price: 340.00, laborHours: 1.8, warranty: 24 } },

    // ── Septic (2) ──
    { id: "ir_septic_pumping", category: "Septic", name: "Septic Tank Pumping", description: "Pump septic tank and inspect condition", tags: ["septic","pumping"], good: { price: 250.00, laborHours: 2.4, warranty: 3 }, better: { price: 400.00, laborHours: 3.8, warranty: 12 }, best: { price: 650.00, laborHours: 6.2, warranty: 24 } },
    { id: "ir_septic_repair", category: "Septic", name: "Septic Tank Repair", description: "Repair septic system components and restore operation", tags: ["septic","repair"], good: { price: 546.67, laborHours: 5.2, warranty: 3 }, better: { price: 874.67, laborHours: 8.3, warranty: 12 }, best: { price: 1486.94, laborHours: 12.0, warranty: 24 } }
  ]
};
