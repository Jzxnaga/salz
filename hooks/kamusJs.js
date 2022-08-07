export function kamusJs (opt){
	var ret = opt;

    switch (opt) 
    {
    	case 'SurveyId': 
            ret = "SurveyId";
            break;
        case 'FullName': 
            ret = "Nama Lengkap";
            break;
        case 'NoTelp': 
            ret = "No Telephone";
            break;
        case 'Email': 
            ret = "E-Mail";
            break;
        case 'NamaLengkap': 
            ret = "Nama Lengkap";
            break; 
        case 'NamaSTNK': 
            ret = "Nama STNK";
            break; 
        case 'NoPol1': 
            ret = "Nomor Polisi Awal";
            break; 
        case 'NoPol2': 
            ret = "Nomor Polisi Tengah";
            break; 
        case 'NoPol3': 
            ret = "Nomor Polisi Akhir";
            break; 

        case 'AlamatTertanggung': 
            ret = "Alamat Tertanggung";
            break;

        case 'Address': 
            ret = "Alamat Tertanggung";
            break;s

        case 'STNKName': 
            ret = "Nama STNK";
            break;

        case 'AlamatSurvey': 
            ret = "Alamat Survey";
            break;

        case 'SurveyAddress': 
            ret = "Alamat Survey";
            break;

        case 'BuildYear':
        	ret = 'Tahun Pembuatan';
        	break;

        case 'VehicleBrand':
        	ret = 'Merk Kendaraan';
        	break;
        case 'VehicleModel':
        	ret = 'Model Kendaraan';
        	break;
        case 'VehicleType':
            ret = 'Tipe Kendaraan';
            break;
        case 'PlatNo1':
        	ret = 'PlatNo1';
        	break;
        case 'PlatNo2':
        	ret = 'PlatNo2';
        	break;
        case 'PlatNo3':
        	ret = 'PlatNo3';
        	break;
        case 'ChassisNo':
        	ret = 'No.Rangka';
        	break;
       case 'EngineNo':
        	ret = 'No.Mesin';
        	break;
        case 'Colour':
        	ret = 'Warna Kendaraan';
        	break;
        case 'Mileage':
        	ret = 'Jarak Tempuh';
        	break;
        case 'UsageFor':
        	ret = 'Penggunaan';
        	break;
        case 'AdditionalAccessories':
        	ret = 'Aksesoris';
        	break;
       	case 'EngineCondition':
        	ret = 'Kondisi Mesin';
        	break;
        case 'NoPol':
        	ret = 'No. Polisi';
        	break;


        case 'FotoKTP':
            ret = 'Foto KTP';
            break;
        case 'FotoSTNK':
            ret = 'Foto STNK';
            break;
        case 'FotoDepan':
            ret = 'Foto Depan';
            break;
        case 'FotoBelakang':
            ret = 'Foto Belakang';
            break;
        case 'FotoKiri':
            ret = 'Foto Kiri';
            break;
        case 'FotoKanan':
            ret = 'Foto Kanan';
            break;
        case 'FotoAtap':
            ret = 'Foto Atap';
            break;
        case 'FotoDashboard':
            ret = 'Foto Dashboard';
            break;
        case 'FotoAksesoris':
            ret = 'Foto Aksesoris';
            break;
        case 'FotoOther':
            ret = 'Foto Other';
            break;



        case 'NoPolisi':
            ret = 'No.Polisi';
            break;
        case 'TahunPembuatan':
            ret = 'Tahun Pembuatan';
            break;
        case 'MerkKendaraan':
            ret = 'Merk Kendaraan';
            break;
        case 'TipeKendaraan':
            ret = 'Tipe Kendaraan';
            break;
        case 'ModelKendaraan':
            ret = 'Model Kendaraan';
            break;
        case 'ModelCode':
            ret = 'Model Code';
            break;
        case 'NoRangka':
            ret = 'No.Rangka';
            break;
        case 'NoMesin':
            ret = 'No.Mesin';
            break;
        case 'WarnaKendaraan':
            ret = 'Warna Kendaraan';
            break;
        case 'JarakTempuh':
            ret = 'Jarak Tempuh';
            break;
        case 'KondisiMesin':
            ret = 'Kondisi Mesin';
            break;


    }

    return ret;
}

