module.exports = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^react(.*)$",
    "^styled(.*)$",
    "^swiper(.*)$",
    "^@(components|enums|mock|models|pages|routes|repositories|services|store|utils)/(.*)$",
    "^[./]"
  ],
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 150,
}
