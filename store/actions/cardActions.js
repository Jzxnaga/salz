import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import bodyJson from '../../screens/DataSurvey/bodyJson';

const mainUrl = 'https://api.jsonbin.io/b/'
const urlHeroku='https://absen369.herokuapp.com';
const urlDev='http://192.168.1.9:3000'


export function getUser(body){
    return async dispatch=>{ 
        let UserType = body.UserType
        console.log(UserType,'getUserasddsaasddsa')

        if (UserType=='A3'){
            console.log('yes dia surveyor')
            dispatch({
                type: 'SET_LOGIN_STATUS',
                newData : 1
            })
        } else if (UserType=='A1'|| UserType=='A2'){
            console.log('yes dia client')
            dispatch({
                type: 'SET_LOGIN_STATUS',
                newData : 4
            }) 
        } else {
            dispatch({
                type: 'SET_LOGIN_STATUS',
                newData : 2
            }) 
        }
    }
}

// export async function getAPIAfterLogin(userId){
//     try{
//         const url= 'http://114.7.209.148:92/ari_api/gisel/surveyListRegisteredTop';
//         await axios({
//         url:url,
//         method: 'post',
//         headers: {'x-access-key':"YXJpIGdpYSBkYXNoYm9hcmQ="},
//         data :{
//                 "user_id": "2"
//             }
//         })
//         .then((data)=> {
//             let surveyMain = data.data
//             console.log(data,'didatagetapiafterlogin')
//             return surveyMain
        
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

//     }
//     catch{

//     }
// }


// export function getUser(body){
//     return async dispatch=>{ 
//         let username = body.username
        
//         if (username=='dev'){
//             console.log(username)
//             dispatch({
//                 type: 'SET_LOGIN_STATUS',
//                 newData : 1
//             })
//         } else if (username=='client'){
//             dispatch({
//                 type: 'SET_LOGIN_STATUS',
//                 newData : 4
//             }) 
//         } else {
//             dispatch({
//                 type: 'SET_LOGIN_STATUS',
//                 newData : 2
//             }) 
//         }
//     }

export function tipeUser(input){
    if(input=='A0'){
        return "Admin"
    }else if(input=='A1'){
        return "client"
    }else if(input=='A2'){
        return "client"
    }else if(input=='A3'){
        return "surveyor"
    }
}


export function UserId(data){
    return{
        type: 'SET_USERID',
        newData : data
    }
}


export function UserFullName(data){
    return{
        type: 'SET_USERFULLNAME',
        newData : data
    }
}

export function UserType(data){
    return{
        type: 'SET_USERTYPE',
        newData : data
    }
}

export function resetLogin(){
  console.log('at store, reset login')
    return{
        type: 'SET_LOGIN_STATUS',
        newData : 0
    }
}

export function resetCamera(){
    return{
        type: 'SET_UPLOAD_STATUS',
        newData : 0
    }
}

export function setSpinnerState(data){
    return{
        type :'SPINNER_STATE',
        newData : data
    }
}

export const actionLoadDataLocally = async (data) =>{
    console.log('id di data = ' , data.id)
    try {
        let jsonValue = await AsyncStorage.getItem(data.id)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e)
    } 
}

export const testmasuk = () =>{
    console.log('testberhasil')
}

export const changeDataRead = async(rowItem) =>{

    let newData = rowItem
    let newDataJson = bodyJson

    ///cleaning up data
    newDataJson.id=newData.SurveyId.toString()
    newDataJson.DataPemohon.NamaLengkap = newData.Name
    newDataJson.DataPemohon.NamaSTNK = null
    newDataJson.DataPemohon.AlamatTertanggung = newData.Address
    newDataJson.DataPemohon.AlamatSurvey = null
    newDataJson.DataPemohon.Email = newData.Email
    newDataJson.DataKendaraan.NoPolisi = null
    newDataJson.DataKendaraan.NoPolisi1 = newData.PlatNo1
    newDataJson.DataKendaraan.NoPolisi2 = newData.PlatNo2
    newDataJson.DataKendaraan.NoPolisi3 = newData.PlatNo3
    newDataJson.DataKendaraan.ModelCode =  null              
    newDataJson.DataKendaraan.TahunKendaraan = newData.VehicleYear
    newDataJson.DataKendaraan.MerkKendaraan = newData.VehicleBrand
    newDataJson.DataKendaraan.TipeKendaraan = newData.VehicleType
    newDataJson.DataKendaraan.ModelKendaraan = null
    newDataJson.DataKendaraan.NoRangka = null
    newDataJson.DataKendaraan.NoMesin = null
    newDataJson.DataKendaraan.WarnaKendaraan = null
    newDataJson.DataKendaraan.JarakTempuh = null
    newDataJson.DataKendaraan.Aksesoris = null
    newDataJson.DataKendaraan.Penggunaan = null
    newDataJson.DataKendaraan.KondisiMesin = null

    newDataJson.Image.FotoKTP.uri=null
    newDataJson.Image.FotoKTP.location.latitude=null
    newDataJson.Image.FotoKTP.location.latitude=null
    newDataJson.Image.FotoKTP.date=null
    newDataJson.Image.FotoKTP.notes=null

    newDataJson.Image.FotoSTNK.uri=null
    newDataJson.Image.FotoSTNK.location.latitude=null
    newDataJson.Image.FotoSTNK.location.latitude=null
    newDataJson.Image.FotoSTNK.date=null
    newDataJson.Image.FotoSTNK.notes=null

    newDataJson.Image.FotoDepan.uri=null
    newDataJson.Image.FotoDepan.location.latitude=null
    newDataJson.Image.FotoDepan.location.latitude=null
    newDataJson.Image.FotoDepan.date=null
    newDataJson.Image.FotoDepan.notes=null

    newDataJson.Image.FotoBelakang.uri=null
    newDataJson.Image.FotoBelakang.location.latitude=null
    newDataJson.Image.FotoBelakang.location.latitude=null
    newDataJson.Image.FotoBelakang.date=null
    newDataJson.Image.FotoBelakang.notes=null

    newDataJson.Image.FotoKiri.uri=null
    newDataJson.Image.FotoKiri.location.latitude=null
    newDataJson.Image.FotoKiri.location.latitude=null
    newDataJson.Image.FotoKiri.date=null
    newDataJson.Image.FotoKiri.notes=null

    newDataJson.Image.FotoKanan.uri=null
    newDataJson.Image.FotoKanan.location.latitude=null
    newDataJson.Image.FotoKanan.location.latitude=null
    newDataJson.Image.FotoKanan.date=null
    newDataJson.Image.FotoKanan.notes=null

    newDataJson.Image.FotoAtap.uri=null
    newDataJson.Image.FotoAtap.location.latitude=null
    newDataJson.Image.FotoAtap.location.latitude=null
    newDataJson.Image.FotoAtap.date=null
    newDataJson.Image.FotoAtap.notes=null

    newDataJson.Image.FotoDashboard.uri=null
    newDataJson.Image.FotoDashboard.location.latitude=null
    newDataJson.Image.FotoDashboard.location.latitude=null
    newDataJson.Image.FotoDashboard.date=null
    newDataJson.Image.FotoDashboard.notes=null

    newDataJson.Image.FotoAksesoris.uri=null
    newDataJson.Image.FotoAksesoris.location.latitude=null
    newDataJson.Image.FotoAksesoris.location.latitude=null
    newDataJson.Image.FotoAksesoris.date=null
    newDataJson.Image.FotoAksesoris.notes=null

    newDataJson.Image.FotoOther.uri=null
    newDataJson.Image.FotoOther.location.latitude=null
    newDataJson.Image.FotoOther.location.latitude=null
    newDataJson.Image.FotoOther.date=null
    newDataJson.Image.FotoOther.notes=null

    ///cleaning up data



    console.log(newDataJson,'-------------newDataJsonNEWDATA')



    try {
        //checking if there is old data
        let oldData = await actionLoadDataLocally(newDataJson)
        console.log(oldData,'----------------------------------------------------------olddatagaada')
        //checking if there is old data
        if(oldData == null) {
            //console.log(newDataJson,'ini yang dikirimnih newdatajson')
                actionSaveDataLocallyFirstTime(newDataJson)
            } else {
                console.log('masuk trying to save data locally second time')
                console.log(oldData,'-------old data nya')
                actionSaveDataLocallySecondTime(oldData,newData.SurveyId.toString())
            }

        } catch (e) {
        throw 'masuk error'
    }
}

export const rewriteLocalData = async(newData) =>{
    try {
        //checking if there is old data
        let oldData = await actionLoadDataLocally(newData)
        if(oldData == null){
            oldData = newData
        }
        console.log(newData,'ininewdatanya')
        console.log(oldData,'oldDatadi rewrite localdata')
        const jsonValue = JSON.stringify({
            id : newData.id ,
                DataPemohon: {
                    NamaLengkap        : newData.DataPemohon.NamaLengkap == undefined||null ? oldData.DataPemohon.NamaLengkap : newData.DataPemohon.NamaLengkap,
                    NamaSTNK           : newData.DataPemohon.NamaSTNK == undefined||null ? oldData.DataPemohon.NamaSTNK : newData.DataPemohon.NamaSTNK,
                    AlamatTertanggung  : newData.DataPemohon.AlamatTertanggung == undefined||null ? oldData.DataPemohon.AlamatTertanggung : newData.DataPemohon.AlamatTertanggung,
                    AlamatSurvey       : newData.DataPemohon.AlamatSurvey == undefined||null ? oldData.DataPemohon.AlamatSurvey : newData.DataPemohon.AlamatSurvey,
                    Email              : newData.DataPemohon.Email == undefined||null ? oldData.DataPemohon.Email : newData.DataPemohon.Email,
                },
                DataKendaraan : {
                    TahunPembuatan     : newData.DataKendaraan.TahunPembuatan == undefined||null ? oldData.DataKendaraan.TahunPembuatan : newData.DataKendaraan.TahunPembuatan,
                    MerkKendaraan      : newData.DataKendaraan.MerkKendaraan == undefined||null ? oldData.DataKendaraan.MerkKendaraan : newData.DataKendaraan.MerkKendaraan,
                    TipeKendaraan      : newData.DataKendaraan.TipeKendaraan == undefined||null ? oldData.DataKendaraan.TipeKendaraan : newData.DataKendaraan.TipeKendaraan,
                    ModelKendaraan     : newData.DataKendaraan.ModelKendaraan == undefined||null ? oldData.DataKendaraan.ModelKendaraan : newData.DataKendaraan.ModelKendaraan,
                    ModelCode          : newData.DataKendaraan.ModelCode == undefined||null ? oldData.DataKendaraan.ModelCode : newData.DataKendaraan.ModelCode,
                    NoPolisi           : newData.DataKendaraan.NoPolisi == undefined||null ? oldData.DataKendaraan.NoPolisi : newData.DataKendaraan.NoPolisi,
                    NoPolisi1          : newData.DataKendaraan.NoPolisi1 == undefined||null ? oldData.DataKendaraan.NoPolisi1 : newData.DataKendaraan.NoPolisi1,
                    NoPolisi2          : newData.DataKendaraan.NoPolisi2 == undefined||null ? oldData.DataKendaraan.NoPolisi2 : newData.DataKendaraan.NoPolisi2,
                    NoPolisi3          : newData.DataKendaraan.NoPolisi3 == undefined||null ? oldData.DataKendaraan.NoPolisi3 : newData.DataKendaraan.NoPolisi3,
                    NoRangka           : newData.DataKendaraan.NoRangka == undefined||null ? oldData.DataKendaraan.NoRangka : newData.DataKendaraan.NoRangka,
                    NoMesin            : newData.DataKendaraan.NoMesin == undefined||null ? oldData.DataKendaraan.NoMesin : newData.DataKendaraan.NoMesin,
                    WarnaKendaraan     : newData.DataKendaraan.WarnaKendaraan == undefined||null ? oldData.DataKendaraan.WarnaKendaraan : newData.DataKendaraan.WarnaKendaraan,
                    JarakTempuh        : newData.DataKendaraan.JarakTempuh == undefined||null ? oldData.DataKendaraan.JarakTempuh : newData.DataKendaraan.JarakTempuh,
                    Aksesoris          : newData.DataKendaraan.Aksesoris == undefined||null ? oldData.DataKendaraan.Aksesoris : newData.DataKendaraan.Aksesoris,
                    Penggunaan         : newData.DataKendaraan.Penggunaan == undefined||null ? oldData.DataKendaraan.Penggunaan : newData.DataKendaraan.Penggunaan,
                    KondisiMesin       : newData.DataKendaraan.KondisiMesin == undefined||null ? oldData.DataKendaraan.KondisiMesin : newData.DataKendaraan.KondisiMesin,
                },
                Image : {
                    FotoKTP            : {
                        uri:newData.Image.FotoKTP.uri == undefined||null ? oldData.Image.FotoKTP.uri : newData.Image.FotoKTP.uri,
                        location:{
                            latitude:newData.Image.FotoKTP.location.latitude == undefined||null ? oldData.Image.FotoKTP.location.latitude : newData.Image.FotoKTP.location.latitude,
                            longitude:newData.Image.FotoKTP.location.longitude == undefined||null ? oldData.Image.FotoKTP.location.longitude : newData.Image.FotoKTP.location.longitude,
                        },
                        date:newData.Image.FotoKTP.date == undefined||null ? oldData.Image.FotoKTP.date : newData.Image.FotoKTP.date,
                        notes:newData.Image.FotoKTP.notes == undefined||null ? oldData.Image.FotoKTP.notes : newData.Image.FotoKTP.notes,
                    },
                    FotoSTNK           : {
                        uri:newData.Image.FotoSTNK.uri == undefined||null ? oldData.Image.FotoSTNK.uri : newData.Image.FotoSTNK.uri,
                        location:{
                            latitude:newData.Image.FotoSTNK.location.latitude == undefined||null ? oldData.Image.FotoSTNK.location.latitude : newData.Image.FotoSTNK.location.latitude,
                            longitude:newData.Image.FotoSTNK.location.longitude == undefined||null ? oldData.Image.FotoSTNK.location.longitude : newData.Image.FotoSTNK.location.longitude,
                        },
                        date:newData.Image.FotoSTNK.date == undefined||null ? oldData.Image.FotoSTNK.date : newData.Image.FotoSTNK.date,
                        notes:newData.Image.FotoSTNK.notes == undefined||null ? oldData.Image.FotoSTNK.notes : newData.Image.FotoSTNK.notes,
                    },
                    FotoDepan          : {
                        uri:newData.Image.FotoDepan.uri == undefined||null ? oldData.Image.FotoDepan.uri : newData.Image.FotoDepan.uri,
                        location:{
                            latitude:newData.Image.FotoDepan.location.latitude == undefined||null ? oldData.Image.FotoDepan.location.latitude : newData.Image.FotoDepan.location.latitude,
                            longitude:newData.Image.FotoDepan.location.longitude == undefined||null ? oldData.Image.FotoDepan.location.longitude : newData.Image.FotoDepan.location.longitude,
                        },
                        date:newData.Image.FotoDepan.date == undefined||null ? oldData.Image.FotoDepan.date : newData.Image.FotoDepan.date,
                        notes:newData.Image.FotoDepan.notes == undefined||null ? oldData.Image.FotoDepan.notes : newData.Image.FotoDepan.notes,
                    },
                    FotoBelakang       : {
                        uri:newData.Image.FotoBelakang.uri == undefined||null ? oldData.Image.FotoBelakang.uri : newData.Image.FotoBelakang.uri,
                        location:{
                            latitude:newData.Image.FotoBelakang.location.latitude == undefined||null ? oldData.Image.FotoBelakang.location.latitude : newData.Image.FotoBelakang.location.latitude,
                            longitude:newData.Image.FotoBelakang.location.longitude == undefined||null ? oldData.Image.FotoBelakang.location.longitude : newData.Image.FotoBelakang.location.longitude,
                        },
                        date:newData.Image.FotoBelakang.date == undefined||null ? oldData.Image.FotoBelakang.date : newData.Image.FotoBelakang.date,
                        notes:newData.Image.FotoBelakang.notes == undefined||null ? oldData.Image.FotoBelakang.notes : newData.Image.FotoBelakang.notes,
                    },
                    FotoKiri           : {
                        uri:newData.Image.FotoKiri.uri == undefined||null ? oldData.Image.FotoKiri.uri : newData.Image.FotoKiri.uri,
                        location:{
                            latitude:newData.Image.FotoKiri.location.latitude == undefined||null ? oldData.Image.FotoKiri.location.latitude : newData.Image.FotoKiri.location.latitude,
                            longitude:newData.Image.FotoKiri.location.longitude == undefined||null ? oldData.Image.FotoKiri.location.longitude : newData.Image.FotoKiri.location.longitude,
                        },
                        date:newData.Image.FotoKiri.date == undefined||null ? oldData.Image.FotoKiri.date : newData.Image.FotoKiri.date,
                        notes:newData.Image.FotoKiri.notes == undefined||null ? oldData.Image.FotoKiri.notes : newData.Image.FotoKiri.notes,
                    },
                    FotoKanan          : {
                        uri:newData.Image.FotoKanan.uri == undefined||null ? oldData.Image.FotoKanan.uri : newData.Image.FotoKanan.uri,
                        location:{
                            latitude:newData.Image.FotoKanan.location.latitude == undefined||null ? oldData.Image.FotoKanan.location.latitude : newData.Image.FotoKanan.location.latitude,
                            longitude:newData.Image.FotoKanan.location.longitude == undefined||null ? oldData.Image.FotoKanan.location.longitude : newData.Image.FotoKanan.location.longitude,
                        },
                        date:newData.Image.FotoKanan.date == undefined||null ? oldData.Image.FotoKanan.date : newData.Image.FotoKanan.date,
                        notes:newData.Image.FotoKanan.notes == undefined||null ? oldData.Image.FotoKanan.notes : newData.Image.FotoKanan.notes,
                    },
                    FotoAtap           : {
                        uri:newData.Image.FotoAtap.uri == undefined||null ? oldData.Image.FotoAtap.uri : newData.Image.FotoAtap.uri,
                        location:{
                            latitude:newData.Image.FotoAtap.location.latitude == undefined||null ? oldData.Image.FotoAtap.location.latitude : newData.Image.FotoAtap.location.latitude,
                            longitude:newData.Image.FotoAtap.location.longitude == undefined||null ? oldData.Image.FotoAtap.location.longitude : newData.Image.FotoAtap.location.longitude,
                        },
                        date:newData.Image.FotoAtap.date == undefined||null ? oldData.Image.FotoAtap.date : newData.Image.FotoAtap.date,
                        notes:newData.Image.FotoAtap.notes == undefined||null ? oldData.Image.FotoAtap.notes : newData.Image.FotoAtap.notes,

                    },
                    FotoDashboard      : {
                        uri:newData.Image.FotoDashboard.uri == undefined||null ? oldData.Image.FotoDashboard.uri : newData.Image.FotoDashboard.uri,
                        location:{
                            latitude:newData.Image.FotoDashboard.location.latitude == undefined||null ? oldData.Image.FotoDashboard.location.latitude : newData.Image.FotoDashboard.location.latitude,
                            longitude:newData.Image.FotoDashboard.location.longitude == undefined||null ? oldData.Image.FotoDashboard.location.longitude : newData.Image.FotoDashboard.location.longitude,
                        },
                        date:newData.Image.FotoDashboard.date == undefined||null ? oldData.Image.FotoDashboard.date : newData.Image.FotoDashboard.date,
                        notes:newData.Image.FotoDashboard.notes == undefined||null ? oldData.Image.FotoDashboard.notes : newData.Image.FotoDashboard.notes,
                    },
                    FotoAksesoris      : {
                        uri:newData.Image.FotoAksesoris.uri == undefined||null ? oldData.Image.FotoAksesoris.uri : newData.Image.FotoAksesoris.uri,
                        location:{
                            latitude:newData.Image.FotoAksesoris.location.latitude == undefined||null ? oldData.Image.FotoAksesoris.location.latitude : newData.Image.FotoAksesoris.location.latitude,
                            longitude:newData.Image.FotoAksesoris.location.longitude == undefined||null ? oldData.Image.FotoAksesoris.location.longitude : newData.Image.FotoAksesoris.location.longitude,
                        },
                        date:newData.Image.FotoAksesoris.date == undefined||null ? oldData.Image.FotoAksesoris.date : newData.Image.FotoAksesoris.date,
                        notes:newData.Image.FotoAksesoris.notes == undefined||null ? oldData.Image.FotoAksesoris.notes : newData.Image.FotoAksesoris.notes,
                    },
                    FotoOther      : {
                        uri:newData.Image.FotoOther.uri == undefined||null ? oldData.Image.FotoOther.uri : newData.Image.FotoOther.uri,
                        location:{
                            latitude:newData.Image.FotoOther.location.latitude == undefined||null ? oldData.Image.FotoOther.location.latitude : newData.Image.FotoOther.location.latitude,
                            longitude:newData.Image.FotoOther.location.longitude == undefined||null ? oldData.Image.FotoOther.location.longitude : newData.Image.FotoOther.location.longitude,
                        },
                        date:newData.Image.FotoOther.date == undefined||null ? oldData.Image.FotoOther.date : newData.Image.FotoOther.date,
                        notes:newData.Image.FotoOther.notes == undefined||null ? oldData.Image.FotoOther.notes : newData.Image.FotoOther.notes,
                    },
                },
                TandaTangan            : newData.TandaTangan == undefined||null ? oldData.TandaTangan : newData.TandaTangan,
        })
            console.log(jsonValue)
            await AsyncStorage.setItem(newData.id, jsonValue)
        } catch (e) {
            console.log('masuk error disini nih knapa hayo')
            throw 'error'
    }
}



export const actionSaveDataLocallySecondTime = async (oldData,oldDataId) =>{
    console.log(oldData,'2nd time // rewrite data locally data on card action')
    try {
        const jsonValue = JSON.stringify({
            id : oldDataId ,
                DataPemohon: {
                    NamaLengkap        : oldData.DataPemohon.NamaLengkap == undefined || null ? null : oldData.DataPemohon.NamaLengkap,
                    NamaSTNK           : oldData.DataPemohon.NamaSTNK == undefined|| null ? null : oldData.DataPemohon.NamaSTNK,
                    AlamatTertanggung  : oldData.DataPemohon.AlamatTertanggung == undefined ||null ? null : oldData.DataPemohon.AlamatTertanggung,
                    AlamatSurvey       : oldData.DataPemohon.AlamatSurvey == undefined||null ? null : oldData.DataPemohon.AlamatSurvey,
                    Email              : oldData.DataPemohon.Email == undefined||null ? null : oldData.DataPemohon.Email,
                },
                DataKendaraan : {
                    TahunPembuatan     : oldData.DataKendaraan.TahunPembuatan == undefined||null ? null : oldData.DataKendaraan.TahunPembuatan,
                    MerkKendaraan      : oldData.DataKendaraan.MerkKendaraan == undefined||null ? null : oldData.DataKendaraan.MerkKendaraan,
                    TipeKendaraan      : oldData.DataKendaraan.TipeKendaraan == undefined||null ? null : oldData.DataKendaraan.TipeKendaraan,
                    ModelKendaraan     : oldData.DataKendaraan.ModelKendaraan == undefined||null ? null : oldData.DataKendaraan.ModelKendaraan,
                    ModelCode          : oldData.DataKendaraan.ModelCode == undefined||null ? null : oldData.DataKendaraan.ModelCode,
                    NoPolisi           : oldData.DataKendaraan.NoPolisi == undefined||null ? null : oldData.DataKendaraan.NoPolisi,
                    NoPolisi1          : oldData.DataKendaraan.NoPolisi1 == undefined||null ? null : oldData.DataKendaraan.NoPolisi1,
                    NoPolisi2          : oldData.DataKendaraan.NoPolisi2 == undefined||null ? null : oldData.DataKendaraan.NoPolisi2,
                    NoPolisi3          : oldData.DataKendaraan.NoPolisi3 == undefined||null ? null : oldData.DataKendaraan.NoPolisi3,
                    NoRangka           : oldData.DataKendaraan.NoRangka == undefined||null ? null : oldData.DataKendaraan.NoRangka,
                    NoMesin            : oldData.DataKendaraan.NoMesin == undefined||null ? null : oldData.DataKendaraan.NoMesin,
                    WarnaKendaraan     : oldData.DataKendaraan.WarnaKendaraan == undefined||null ? null : oldData.DataKendaraan.WarnaKendaraan,
                    JarakTempuh        : oldData.DataKendaraan.JarakTempuh == undefined||null ? null : oldData.DataKendaraan.JarakTempuh,
                    Aksesoris          : oldData.DataKendaraan.Aksesoris == undefined||null ? null : oldData.DataKendaraan.Aksesoris,
                    Penggunaan         : oldData.DataKendaraan.Penggunaan == undefined||null ? null : oldData.DataKendaraan.Penggunaan,
                    KondisiMesin       : oldData.DataKendaraan.KondisiMesin == undefined||null ? null : oldData.DataKendaraan.KondisiMesin,
                },
                Image : {
                    FotoKTP            : {
                        uri:oldData.Image.FotoKTP.uri == undefined||null ? null : oldData.Image.FotoKTP.uri,
                        location:{
                            latitude:oldData.Image.FotoKTP.location.latitude == undefined||null ? null : oldData.Image.FotoKTP.location.latitude,
                            longitude:oldData.Image.FotoKTP.location.longitude == undefined||null ? null : oldData.Image.FotoKTP.location.longitude,
                        },
                        date:oldData.Image.FotoKTP.date == undefined||null ? null : oldData.Image.FotoKTP.date,
                        notes:oldData.Image.FotoKTP.notes == undefined||null ? null : oldData.Image.FotoKTP.notes,
                    },
                    FotoSTNK           : {
                        uri:oldData.Image.FotoSTNK.uri == undefined||null ? null : oldData.Image.FotoSTNK.uri,
                        location:{
                            latitude:oldData.Image.FotoSTNK.location.latitude == undefined||null ? null : oldData.Image.FotoSTNK.location.latitude,
                            longitude:oldData.Image.FotoSTNK.location.longitude == undefined||null ? null : oldData.Image.FotoSTNK.location.longitude,
                        },
                        date:oldData.Image.FotoSTNK.date == undefined||null ? null : oldData.Image.FotoSTNK.date,
                        notes:oldData.Image.FotoSTNK.notes == undefined||null ? null : oldData.Image.FotoSTNK.notes,
                    },
                    FotoDepan          : {
                        uri:oldData.Image.FotoDepan.uri == undefined||null ? null : oldData.Image.FotoDepan.uri,
                        location:{
                            latitude:oldData.Image.FotoDepan.location.latitude == undefined||null ? null : oldData.Image.FotoDepan.location.latitude,
                            longitude:oldData.Image.FotoDepan.location.longitude == undefined||null ? null : oldData.Image.FotoDepan.location.longitude,
                        },
                        date:oldData.Image.FotoDepan.date == undefined||null ? null : oldData.Image.FotoDepan.date,
                        notes:oldData.Image.FotoDepan.notes == undefined||null ? null : oldData.Image.FotoDepan.notes,
                    },
                    FotoBelakang       : {
                        uri:oldData.Image.FotoBelakang.uri == undefined||null ? null : oldData.Image.FotoBelakang.uri,
                        location:{
                            latitude:oldData.Image.FotoBelakang.location.latitude == undefined||null ? null : oldData.Image.FotoBelakang.location.latitude,
                            longitude:oldData.Image.FotoBelakang.location.longitude == undefined||null ? null : oldData.Image.FotoBelakang.location.longitude,
                        },
                        date:oldData.Image.FotoBelakang.date == undefined||null ? null : oldData.Image.FotoBelakang.date,
                        notes:oldData.Image.FotoBelakang.notes == undefined||null ? null : oldData.Image.FotoBelakang.notes,
                    },
                    FotoKiri           : {
                        uri:oldData.Image.FotoKiri.uri == undefined||null ? null : oldData.Image.FotoKiri.uri,
                        location:{
                            latitude:oldData.Image.FotoKiri.location.latitude == undefined||null ? null : oldData.Image.FotoKiri.location.latitude,
                            longitude:oldData.Image.FotoKiri.location.longitude == undefined||null ? null : oldData.Image.FotoKiri.location.longitude,
                        },
                        date:oldData.Image.FotoKiri.date == undefined||null ? null : oldData.Image.FotoKiri.date,
                        notes:oldData.Image.FotoKiri.notes == undefined||null ? null : oldData.Image.FotoKiri.notes,
                    },
                    FotoKanan          : {
                        uri:oldData.Image.FotoKanan.uri == undefined||null ? null : oldData.Image.FotoKanan.uri,
                        location:{
                            latitude:oldData.Image.FotoKanan.location.latitude == undefined||null ? null : oldData.Image.FotoKanan.location.latitude,
                            longitude:oldData.Image.FotoKanan.location.longitude == undefined||null ? null : oldData.Image.FotoKanan.location.longitude,
                        },
                        date:oldData.Image.FotoKanan.date == undefined||null ? null : oldData.Image.FotoKanan.date,
                        notes:oldData.Image.FotoKanan.notes == undefined||null ? null : oldData.Image.FotoKanan.notes,
                    },
                    FotoAtap           : {
                        uri:oldData.Image.FotoAtap.uri == undefined||null ? null : oldData.Image.FotoAtap.uri,
                        location:{
                            latitude:oldData.Image.FotoAtap.location.latitude == undefined||null ? null : oldData.Image.FotoAtap.location.latitude,
                            longitude:oldData.Image.FotoAtap.location.longitude == undefined||null ? null : oldData.Image.FotoAtap.location.longitude,
                        },
                        date:oldData.Image.FotoAtap.date == undefined||null ? null : oldData.Image.FotoAtap.date,
                        notes:oldData.Image.FotoAtap.notes == undefined||null ? null : oldData.Image.FotoAtap.notes,
                    },
                    FotoDashboard      : {
                        uri:oldData.Image.FotoDashboard.uri == undefined||null ? null : oldData.Image.FotoDashboard.uri,
                        location:{
                            latitude:oldData.Image.FotoDashboard.location.latitude == undefined||null ? null : oldData.Image.FotoDashboard.location.latitude,
                            longitude:oldData.Image.FotoDashboard.location.longitude == undefined||null ? null : oldData.Image.FotoDashboard.location.longitude,
                        },
                        date:oldData.Image.FotoDashboard.date == undefined||null ? null : oldData.Image.FotoDashboard.date,
                        notes:oldData.Image.FotoDashboard.notes == undefined||null ? null : oldData.Image.FotoDashboard.notes,
                    },
                    FotoAksesoris      : {
                        uri:oldData.Image.FotoAksesoris.uri == undefined||null ? null : oldData.Image.FotoAksesoris.uri,
                        location:{
                            latitude:oldData.Image.FotoAksesoris.location.latitude == undefined||null ? null : oldData.Image.FotoAksesoris.location.latitude,
                            longitude:oldData.Image.FotoAksesoris.location.longitude == undefined||null ? null : oldData.Image.FotoAksesoris.location.longitude,
                        },
                        date:oldData.Image.FotoAksesoris.date == undefined||null ? null : oldData.Image.FotoAksesoris.date,
                        notes:oldData.Image.FotoAksesoris.notes == undefined||null ? null : oldData.Image.FotoAksesoris.notes,
                    },
                    FotoOther      : {
                        uri:oldData.Image.FotoOther.uri == undefined||null ? null : oldData.Image.FotoOther.uri,
                        location:{
                            latitude:oldData.Image.FotoOther.location.latitude == undefined||null ? null : oldData.Image.FotoOther.location.latitude,
                            longitude:oldData.Image.FotoOther.location.longitude == undefined||null ? null : oldData.Image.FotoOther.location.longitude,
                        },
                        date:oldData.Image.FotoOther.date == undefined||null ? null : oldData.Image.FotoOther.date,
                        notes:oldData.Image.FotoOther.notes == undefined||null ? null : oldData.Image.FotoOther.notes,
                    },
                },
                TandaTangan: oldData.TandaTangan == undefined || null ? null : oldData.TandaTangan,
        })
        await AsyncStorage.setItem(oldDataId, jsonValue)
        return oldDataId
    } catch (e) {
        throw 'error'
    } 
}


export const actionSaveDataLocallyFirstTime = async (data) =>{
    console.log('1st time save data locally data on card action')
    try {
        const jsonValue = JSON.stringify({
            id : data.Id ,
                DataPemohon: {
                    NamaLengkap        : data.DataPemohon.NamaLengkap == undefined||null ? null : data.DataPemohon.NamaLengkap,
                    NamaSTNK           : data.DataPemohon.NamaSTNK == undefined||null ? null : data.DataPemohon.NamaSTNK,
                    AlamatTertanggung  : data.DataPemohon.AlamatTertanggung == null||null ? null : data.DataPemohon.AlamatTertanggung,
                    AlamatSurvey       : data.DataPemohon.AlamatSurvey == undefined||null ? null : data.DataPemohon.AlamatSurvey,
                    Email              : data.DataPemohon.Email == undefined||null ? null : data.DataPemohon.Email,
                },
                DataKendaraan : {
                    TahunPembuatan     : data.DataKendaraan.TahunPembuatan == undefined||null ? null : data.DataKendaraan.TahunPembuatan,
                    MerkKendaraan      : data.DataKendaraan.MerkKendaraan == undefined||null ? null : data.DataKendaraan.MerkKendaraan,
                    TipeKendaraan      : data.DataKendaraan.TipeKendaraan == undefined||null ? null : data.DataKendaraan.TipeKendaraan,
                    ModelKendaraan     : data.DataKendaraan.ModelKendaraan == undefined||null ? null : data.DataKendaraan.ModelKendaraan,
                    ModelCode     : data.DataKendaraan.ModelCode == undefined||null ? null : data.DataKendaraan.ModelCode,
                    NoPolisi           : data.DataKendaraan.NoPolisi == undefined||null ? null : data.DataKendaraan.NoPolisi,
                    NoPolisi1          : data.DataKendaraan.NoPolisi1 == undefined||null ? null : data.DataKendaraan.NoPolisi1,
                    NoPolisi2          : data.DataKendaraan.NoPolisi2 == undefined||null ? null : data.DataKendaraan.NoPolisi2,
                    NoPolisi3          : data.DataKendaraan.NoPolisi3 == undefined||null ? null : data.DataKendaraan.NoPolisi3,
                    NoRangka           : data.DataKendaraan.NoRangka == undefined||null ? null : data.DataKendaraan.NoRangka,
                    NoMesin            : data.DataKendaraan.NoMesin == undefined||null ? null : data.DataKendaraan.NoMesin,
                    WarnaKendaraan     : data.DataKendaraan.WarnaKendaraan == undefined||null ? null : data.DataKendaraan.WarnaKendaraan,
                    JarakTempuh        : data.DataKendaraan.JarakTempuh == undefined||null ? null : data.DataKendaraan.JarakTempuh,
                    Aksesoris          : data.DataKendaraan.Aksesoris == undefined||null ? null : data.DataKendaraan.Aksesoris,
                    Penggunaan         : data.DataKendaraan.Penggunaan == undefined||null ? null : data.DataKendaraan.Penggunaan,
                    KondisiMesin       : data.DataKendaraan.KondisiMesin == undefined||null ? null : data.DataKendaraan.KondisiMesin,
                },
                Image : {
                    FotoKTP: {
                        uri:data.Image.FotoKTP.uri == undefined||null ? null : data.Image.FotoKTP.uri,
                        location:{
                            latitude:data.Image.FotoKTP.location.latitude == undefined||null ? null : data.Image.FotoKTP.location.latitude,
                            longitude:data.Image.FotoKTP.location.longitude == undefined||null ? null : data.Image.FotoKTP.location.longitude,
                        },
                        date:data.Image.FotoKTP.date == undefined||null ? null : data.Image.FotoKTP.date,
                        notes:data.Image.FotoKTP.notes == undefined||null ? null : data.Image.FotoKTP.notes,
                    },
                    FotoSTNK: {
                        uri:data.Image.FotoSTNK.uri == undefined||null ? null : data.Image.FotoSTNK.uri,
                        location:{
                            latitude:data.Image.FotoSTNK.location.latitude == undefined||null ? null : data.Image.FotoSTNK.location.latitude,
                            longitude:data.Image.FotoSTNK.location.longitude == undefined||null ? null : data.Image.FotoSTNK.location.longitude,
                        },
                        date:data.Image.FotoSTNK.date == undefined||null ? null : data.Image.FotoSTNK.date,
                        notes:data.Image.FotoSTNK.notes == undefined||null ? null : data.Image.FotoSTNK.notes,
                    },
                    FotoDepan: {
                        uri:data.Image.FotoDepan.uri == undefined||null ? null : data.Image.FotoDepan.uri,
                        location:{
                            latitude:data.Image.FotoDepan.location.latitude == undefined||null ? null : data.Image.FotoDepan.location.latitude,
                            longitude:data.Image.FotoDepan.location.longitude == undefined||null ? null : data.Image.FotoDepan.location.longitude,
                        },
                        date:data.Image.FotoDepan.date == undefined||null ? null : data.Image.FotoDepan.date,
                        notes:data.Image.FotoDepan.notes == undefined||null ? null : data.Image.FotoDepan.notes,
                    },
                    FotoBelakang: {
                        uri:data.Image.FotoBelakang.uri == undefined||null ? null : data.Image.FotoBelakang.uri,
                        location:{
                            latitude:data.Image.FotoBelakang.location.latitude == undefined||null ? null : data.Image.FotoBelakang.location.latitude,
                            longitude:data.Image.FotoBelakang.location.longitude == undefined||null ? null : data.Image.FotoBelakang.location.longitude,
                        },
                        date:data.Image.FotoBelakang.date == undefined||null ? null : data.Image.FotoBelakang.date,
                        notes:data.Image.FotoBelakang.notes == undefined||null ? null : data.Image.FotoBelakang.notes,
                    },
                    FotoKiri: {
                        uri:data.Image.FotoKiri.uri == undefined||null ? null : data.Image.FotoKiri.uri,
                        location:{
                            latitude:data.Image.FotoKiri.location.latitude == undefined||null ? null : data.Image.FotoKiri.location.latitude,
                            longitude:data.Image.FotoKiri.location.longitude == undefined||null ? null : data.Image.FotoKiri.location.longitude,
                        },
                        date:data.Image.FotoKiri.date == undefined||null ? null : data.Image.FotoKiri.date,
                        notes:data.Image.FotoKiri.notes == undefined||null ? null : data.Image.FotoKiri.notes,
                    },
                    FotoKanan: {
                        uri:data.Image.FotoKanan.uri == undefined||null ? null : data.Image.FotoKanan.uri,
                        location:{
                            latitude:data.Image.FotoKanan.location.latitude == undefined||null ? null : data.Image.FotoKanan.location.latitude,
                            longitude:data.Image.FotoKanan.location.longitude == undefined||null ? null : data.Image.FotoKanan.location.longitude,
                        },
                        date:data.Image.FotoKanan.date == undefined||null ? null : data.Image.FotoKanan.date,
                        notes:data.Image.FotoKanan.notes == undefined||null ? null : data.Image.FotoKanan.notes,
                    },
                    FotoAtap: {
                        uri:data.Image.FotoAtap.uri == undefined||null ? null : data.Image.FotoAtap.uri,
                        location:{
                            latitude:data.Image.FotoAtap.location.latitude == undefined||null ? null : data.Image.FotoAtap.location.latitude,
                            longitude:data.Image.FotoAtap.location.longitude == undefined||null ? null : data.Image.FotoAtap.location.longitude,
                        },
                        date:data.Image.FotoAtap.date == undefined||null ? null : data.Image.FotoAtap.date,
                        notes:data.Image.FotoAtap.notes == undefined||null ? null : data.Image.FotoAtap.notes,
                    },
                    FotoDashboard: {
                        uri:data.Image.FotoDashboard.uri == undefined||null ? null : data.Image.FotoDashboard.uri,
                        location:{
                            latitude:data.Image.FotoDashboard.location.latitude == undefined||null ? null : data.Image.FotoDashboard.location.latitude,
                            longitude:data.Image.FotoDashboard.location.longitude == undefined||null ? null : data.Image.FotoDashboard.location.longitude,
                        },
                        date:data.Image.FotoDashboard.date == undefined||null ? null : data.Image.FotoDashboard.date,
                        notes:data.Image.FotoDashboard.notes == undefined||null ? null : data.Image.FotoDashboard.notes,
                    },
                    FotoAksesoris: {
                        uri:data.Image.FotoAksesoris.uri == undefined||null ? null : data.Image.FotoAksesoris.uri,
                        location:{
                            latitude:data.Image.FotoAksesoris.location.latitude == undefined||null ? null : data.Image.FotoAksesoris.location.latitude,
                            longitude:data.Image.FotoAksesoris.location.longitude == undefined||null ? null : data.Image.FotoAksesoris.location.longitude,
                        },
                        date:data.Image.FotoAksesoris.date == undefined||null ? null : data.Image.FotoAksesoris.date,
                        notes:data.Image.FotoAksesoris.notes == undefined||null ? null : data.Image.FotoAksesoris.notes,
                    },
                    FotoOther: {
                        uri:data.Image.FotoOther.uri == undefined||null ? null : data.Image.FotoOther.uri,
                        location:{
                            latitude:data.Image.FotoOther.location.latitude == undefined||null ? null : data.Image.FotoOther.location.latitude,
                            longitude:data.Image.FotoOther.location.longitude == undefined||null ? null : data.Image.FotoOther.location.longitude,
                        },
                        date:data.Image.FotoOther.date == undefined||null ? null : data.Image.FotoOther.date,
                        notes:data.Image.FotoOther.notes == undefined||null ? null : data.Image.FotoOther.notes,
                    },
                },
                TandaTangan: data.TandaTangan == undefined||null ? null : data.TandaTangan
        })
        await AsyncStorage.setItem(data.id, jsonValue)
        return data.IdFile
    } catch (e) {
        throw 'error'
    } 
}
