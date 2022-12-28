module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "addfile-5372",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-dynamicapp-5372-addfile:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8019",
                    "protocol": "tcp",
                    "hostPort": "8019"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@dynamicapp.local:27017/dynamicapp_5372?authSource=admin"},{"name":"MONGO_DOMAIN","value":"dynamicapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://dynamicapp.local:8080"},{"name":"SECURITYURL","value":"http://dynamicapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://dynamicapp.local:8001"},{"name":"ADMINURL","value":"http://dynamicapp.local:8004"},{"name":"CAMUNDAURL","value":"http://dynamicapp.local:8002"},{"name":"GCAMURL","value":"http://dynamicapp.local:8007"},{"name":"APIGATEWAY","value":"http://dynamicapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "dynamicapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/dynamicapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "listdrop-5372",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-dynamicapp-5372-listdrop:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8020",
                    "protocol": "tcp",
                    "hostPort": "8020"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@dynamicapp.local:27017/dynamicapp_5372?authSource=admin"},{"name":"MONGO_DOMAIN","value":"dynamicapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://dynamicapp.local:8080"},{"name":"SECURITYURL","value":"http://dynamicapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://dynamicapp.local:8001"},{"name":"ADMINURL","value":"http://dynamicapp.local:8004"},{"name":"CAMUNDAURL","value":"http://dynamicapp.local:8002"},{"name":"GCAMURL","value":"http://dynamicapp.local:8007"},{"name":"APIGATEWAY","value":"http://dynamicapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "dynamicapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/dynamicapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "dynamicapp",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "dynamicapp0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
