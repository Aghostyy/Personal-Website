export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/app-icons/967128265884049459/4c83e5f5fcbc48c031af1633a1af9832.png?size=256&quot",
      name: "Pleanus",
      description: "Proje sonlandırılmıştır.",
      link: "https://aghosty.tech",
    }
  ];
  res.status(200).json(data);
};
