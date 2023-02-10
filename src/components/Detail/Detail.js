import { useEffect, useState } from 'react';

const Detail = ({ urlP }) => {
  const [detail, setDetail] = useState({});
  const getDetail = fetch(urlP);

  useEffect(() => {
    getDetail
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetail(data);
      })
      .catch((error) => console.log(error));
  }, [urlP]);

  return (
    <div>
      <h1>{detail.name}</h1>
      <img alt={detail.name} src={detail?.sprites?.front_default} />
      <h2>Peso : {detail.weight}</h2>
    </div>
  );
};

export default Detail;
