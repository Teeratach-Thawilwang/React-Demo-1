module.exports = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@(assets|components|enums|mock|models|pages|routes|services|store|utils)/(.*)$",
    "^[./]"
  ],
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
