const backoffice = [
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
  {
    path: "/order",
    element: <div>order</div>,
  },
];

backoffice.map((route) => {
  route.path = "/backoffice" + route.path;
});

export default backoffice;
