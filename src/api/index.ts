import service from '../service/axios';

interface ImostNew{
    pageNum:number;
    pageSize:number;
}

interface IRese{
    data:{},
    meta:{}
    // data: T;
    // status: number;
    // statusText: string;
    // headers: {};
    // config: {};
    // request?: any;
}

interface Idata{
    data:{},
    meta:{
        code:string;
        msg: string;
        success: boolean;
        timestamp: string;
        version:string;
    }
}

export function mostNew( data:ImostNew ): Promise<IRese>{
    return service.post('/api/course/mostNew', data)
    // return service({
    //     url:'/api/course/mostNew',
    //     method:'post',
    //     data
    // })
}