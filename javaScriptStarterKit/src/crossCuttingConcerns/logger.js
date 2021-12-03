export class BaseLogger 
{
        log (data) 
        {
                console.log("Default Logger : " + data)
        }
}

// 🚬


export class ElasticLoger extends BaseLogger
{
        log (data) 
        {
                console.log("Logged To Elastic : " + data)
        }
}

export class MongoLoger extends BaseLogger
{
        log (data) 
        {
                console.log("Logged To Mongo : " + data)
        }
}