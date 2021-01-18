import React, { useState } from "react";
import MaterialTable from "material-table";
import arr from "./mock";

import CustomDialog from "./component/Dialog";


function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleMapOpen = (rowData) => {
    setIsDialogOpen(true);
    setSelectedData(rowData);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>

     <h1>Alterdata Software</h1>
     
      <div style={{ maxWidth: "85%", margin: "16px auto" }}>
        <MaterialTable
          columns={[
            { title: "Estabelecimento", field: "estabelecimento" },
            { title: "Segmento", field: "segmento" },
            { title: "Benefício", field: "beneficio" },
            { title: "Contato", field: "contato" },
            { title: "Abrangência", field: "abrangencia" },
          ]}
          data={arr}
          title="Benefícios Alterdata"
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header: {
                actions: 'Localização'
            },
            toolbar: {
              searchTooltip: 'Busca',
          searchPlaceholder: 'Busca'
            }
    }}
          actions={[
            {
              icon: "map",
              tooltip: "Geolocalização",
              onClick: (event, rowData) => handleMapOpen(rowData),
            },
          ]}
        />
        
    <h3>ATENÇÃO! A concenssão do benefício é de inteira responsabilidade do estabelecimento parceiro. Mudanças poderão ocorrer sem aviso prévio.				</h3>
        
      </div>

      <CustomDialog
        open={isDialogOpen}
        handleClose={handleDialogClose}
        selectedData={selectedData}
      />

    </>
  );
}

export default App;
