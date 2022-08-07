module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset",
    [
      '@babel/preset-env',
      {
        "corejs": 3,
        "useBuiltIns": "entry"
      }
    ]
  ],
  // presets: [
  //   ["@babel/preset-env", {
  //     useBuiltIns: "entry", // or "usage"
  //     corejs: 3,
  //   }]
  // ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}