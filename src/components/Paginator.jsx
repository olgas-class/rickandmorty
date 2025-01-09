function Paginator({ curPage, totalPages, cambiaPagina }) {
  //   const pagesArray = [];
  //   for (let i = 0; i < totalPages; i++) {
  //     pagesArray.push(i + 1);
  //   }
  //
  //   console.log(pagesArray);

  const arrayNum = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div>
        <button
          disabled={curPage === 1}
          onClick={() => {
            cambiaPagina(curPage - 1);
          }}
        >
          prev
        </button>{" "}
        {arrayNum.map((num) => (
          <button
            // className={`${num === curPage && "active"}`}
            style={
              { 
                backgroundColor: num === curPage ? "yellow" : "lightgray",
                textAlign: 'center',
                padding: '10px' 
              }             
            }
            key={num}
            onClick={() => cambiaPagina(num)}
          >
            {num}
          </button>
        ))}
        <button
          disabled={curPage === totalPages}
          onClick={() => {
            cambiaPagina(curPage + 1);
          }}
        >
          next
        </button>
      </div>
      <div>
        pagina {curPage} / {totalPages}
      </div>
    </div>
  );
}

export default Paginator;
