window.addEventListener('load', function () {

  // Base URL so ../data/ in specs resolves correctly on GitHub Pages
  const base = window.location.origin + '/The-AI-Divide/';
  const loader = vega.loader({ baseURL: base });
  const opt = (extra) => Object.assign({ actions: false, renderer: "svg", loader }, extra || {});


  // Hero Chart
  vegaEmbed("#hero-chart",      "VEGA-LITE/ai_bubble_hero.vg.json",          opt()).catch(console.error);

  // Act 1 — Choropleth
  vegaEmbed("#choropleth-chart","VEGA-LITE/adoption_map.vg.json",             opt()).catch(console.error);

  // Act 1 — Metro vs Regional dumbbell
  vegaEmbed("#dumbbell-chart",  "VEGA-LITE/metro_regional_dumbbell.vg.json",  opt()).catch(console.error);

  // Act 2 — Waves
  vegaEmbed("#waves-chart",     "VEGA-LITE/waves.vg.json",                    opt({ width: "container" })).catch(console.error);

  // Act 2 — Industry diverging bar
  vegaEmbed("#who-chart",       "VEGA-LITE/adoption_by_industry.vg.json",     opt()).catch(console.error);

  // Act 2 — Sector scatter
  vegaEmbed("#sector-scatter",  "VEGA-LITE/ai_sector_scatter.vg.json",        opt({ width: "container" })).catch(console.error);

  // Act 3 — Skills lollipop
  vegaEmbed("#exposure-chart",  "VEGA-LITE/ai_skills_by_occupation.vg.json",  opt({ width: "container" })).catch(console.error);

  // Act 3 — State × Industry heatmap
  vegaEmbed("#heatmap-chart",   "VEGA-LITE/state_industry_heatmap.vg.json",   opt({ width: "container" })).catch(console.error);

  // Act 4 — Choropleth pair
  vegaEmbed("#choropleth-pair", "VEGA-LITE/choropleth_pair.vg.json",           opt()).catch(console.error);

  // Act 4 — Slope chart
  vegaEmbed("#slope-chart",     "VEGA-LITE/slope_chart.vg.json",              opt({ width: "container" })).catch(console.error);

  // Act 4 — Waffle chart
  vegaEmbed("#waffle-chart",    "VEGA-LITE/waffle.vg.json",                   opt()).catch(console.error);

});
