import React from "react";
import NavComponent from "../component/NavComponent";
import ButtonComponent from "../component/ButtonComponent";

const Pinjampage = () => {
  const jikaDiklik = () => {
    alert("Terima Kasih teman");
  };
  const jikaDiklik1 = () => {
    alert("Thanks Kopinya mas");
  };

  return (
    <>
      <NavComponent />
      <h1 className="fw-bold mt-3 text-center">Welcome Teman</h1>
      <div className="text-center mt-5">
        <p className="fs-2">Agar silaturahmi tidak terputus</p>
        <p className="text-danger fw-bold fs-1">Pinjam Dulu 100</p>
        <div className="d-flex justify-content-center gap-3">
          <ButtonComponent test={"Beri 100"} onClick={jikaDiklik} />
          <ButtonComponent onClick={jikaDiklik1} test={"Traktir Coffe"} />
        </div>
      </div>
    </>
  );
};

export default Pinjampage;
