import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import $ from 'jquery'; 
// register Handsontable's modules
registerAllModules();

const hotData = [
    // {"ProjectID" : "test1" , 'Requestor Name':"test2" , 'description' :"test3" , 'reqn' :"test4" },
    // {"ProjectID" : "test1" , 'Requestor Name':"test2" , 'description' :"test3" , 'reqn' :"test4" },
    // {"ProjectID" : "test1" , 'Requestor Name':"test2" , 'description' :"test3" , 'reqn' :"test4" },
    // {"ProjectID" : "test1" , 'Requestor Name':"test2" , 'description' :"test3" , 'reqn' :"test4" },
    // {"ProjectID" : "test1" , 'Requestor Name':"test2" , 'description' :"test3" , 'reqn' :"test4" },

];

const HTable = () => {

 const hotSettings = {
    startRows: 1,
    minSpareRows:1,
    columns: [{data:'id',type:'text',allowInvalid:false,allowEmpty:false,readOnly:true},
    {data:'ProjectID',type:'dropdown',source:['STMS Creation']},
    {data:'Requestor Name',type:'dropdown',source:['Submitted to supplier','Submitted for approval','Others'],allowInvalid:false,allowEmpty:false},
    {data:'description',type:'dropdown',source:['E-mail','System','Chat'],allowInvalid:false,allowEmpty:false},
    {data:'reqn',type:'text',allowInvalid:false}

    ],
    colHeaders: [ 'id' ,'ProjectID' , 'Requestor Name' , 'description' , 'reqn' ],
    colWidths: 200,
    licenseKey: 'non-commercial-and-evaluation',
    afterChange: (changes) => {
    //     if (changes) {
    //         console.log(changes)
    //       changes.forEach(([row, prop, oldValue, newValue ]) => {
    //       console.log(row, prop, oldValue, newValue );
    //     //   console.log()
    //     //   var rowcol = core.getDataAtRow(row, col);
    //     });
    //   }

    if(changes) {
        $.each(changes, function (index, element) {
            console.log(element)
            // console.log(row, prop, oldValue, newValue );
         })
    }
    }
  };

  return (
    <div id="hot-app">
      <HotTable
        // data={[]}
        width="1000"
        height="300"
        settings={hotSettings}
      />
    </div>
  );
}

export default HTable;