module.exports = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^react(.*)$",
    "^styled(.*)$",
    "^swiper(.*)$",
    "^@(assets|components|enums|mock|models|pages|routes|services|store|utils)/(.*)$",
    "^[./]"
  ],
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
