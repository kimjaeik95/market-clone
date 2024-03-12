const renderData = (data) => {
  data.forEach((obj) => console.log(obj.id));
};
const fetchList = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  renderData(data);
};

fetchList();
