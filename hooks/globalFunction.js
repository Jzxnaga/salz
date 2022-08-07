export function changeDateFormat(input){

        let newDate = new Date(input)
        let tanggal = newDate.getDate()
        let bulan = newDate.getMonth()
        const monthNumberToLabelMap = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        
        let tahun = newDate.getFullYear()

        return `${tanggal}-${monthNumberToLabelMap[bulan]}-${tahun}`
    }

export function changeDateDate(input){

        let newDate = new Date(input)
        let tanggal = newDate.getDate()
        let bulan = newDate.getMonth()
        const monthNumberToLabelMap = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        
        let tahun = newDate.getFullYear()

        return `${tanggal}`
    }

export function changeDateMonth(input){

        let newDate = new Date(input)
        let tanggal = newDate.getDate()
        let bulan = newDate.getMonth()
        const monthNumberToLabelMap = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        
        let tahun = newDate.getFullYear()

        return `${monthNumberToLabelMap[bulan]}`
    }

export function changeDateYear(input){

        let newDate = new Date(input)
        let tanggal = newDate.getDate()
        let bulan = newDate.getMonth()
        const monthNumberToLabelMap = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        
        let tahun = newDate.getFullYear()

        return `${tahun}`
    }

export function changeNameFromDatabase(input){
        let output
        console.log('input di global function changeNameFromDatabase', input)
        switch(input) {
          case "Full Name":
            output = "NamaLengkap";
            break;
          case "Address":
            output = "Alamat Tertanggung";
            break;
          case "Apple":
            output = "How you like them apples?";
            break;
          default:
            output = input;
        }




        return `${output}`
}