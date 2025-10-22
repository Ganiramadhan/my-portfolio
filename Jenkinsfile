pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_NAME = 'my-portfolio'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        DOCKER_REGISTRY = ''
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials' 
        
        APP_NAME = 'my-portfolio'
        APP_PORT = '3009'
        
        NODE_VERSION = '18'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Environment Info') {
            steps {
                echo 'Displaying environment information...'
                sh 'docker --version'
                sh 'node --version || echo "Node not installed in Jenkins agent"'
                sh 'pnpm --version || echo "PNPM not installed in Jenkins agent"'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies with pnpm...'
                script {
                    sh '''
                        docker run --rm \
                        -v $(pwd):/app \
                        -w /app \
                        node:18-alpine \
                        sh -c "npm install -g pnpm && pnpm install --frozen-lockfile"
                    '''
                }
            }
        }
        
        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                script {
                    sh '''
                        docker run --rm \
                        -v $(pwd):/app \
                        -w /app \
                        node:18-alpine \
                        sh -c "npm install -g pnpm && pnpm run lint"
                    '''
                }
            }
        }
        
        stage('Build Application') {
            steps {
                echo 'Building Next.js application...'
                script {
                    sh '''
                        docker run --rm \
                        -v $(pwd):/app \
                        -w /app \
                        node:18-alpine \
                        sh -c "npm install -g pnpm && pnpm run build"
                    '''
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    sh "docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_TAG} ."
                    sh "docker build -t ${DOCKER_IMAGE_NAME}:latest ."
                }
            }
        }
        
        stage('Push to Registry') {
            when {
                branch 'main' 
            }
            steps {
                echo 'Pushing Docker image to registry...'
                script {
                    withCredentials([usernamePassword(
                        credentialsId: "${DOCKER_CREDENTIALS_ID}",
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )]) {
                        sh '''
                            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin ${DOCKER_REGISTRY}
                            docker push ${DOCKER_IMAGE_NAME}:${DOCKER_TAG}
                            docker push ${DOCKER_IMAGE_NAME}:latest
                        '''
                    }
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main' 
            }
            steps {
                echo 'Deploying application...'
                script {
                    sh '''
                        docker stop ${APP_NAME} || true
                        docker rm ${APP_NAME} || true
                    '''
                    
                    sh '''
                        docker run -d \
                        --name ${APP_NAME} \
                        --restart unless-stopped \
                        -p ${APP_PORT}:${APP_PORT} \
                        ${DOCKER_IMAGE_NAME}:latest
                    '''
                }
            }
        }
        
        stage('Health Check') {
            when {
                branch 'main'
            }
            steps {
                echo 'Performing health check...'
                script {
                    sh 'sleep 10'
                    
                    sh '''
                        if docker ps | grep -q ${APP_NAME}; then
                            echo "Container ${APP_NAME} is running successfully"
                        else
                            echo "Container ${APP_NAME} failed to start"
                            exit 1
                        fi
                    '''
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleaning up old Docker images...'
                script {
                    sh 'docker image prune -f'
                    
                    sh '''
                        docker images ${DOCKER_IMAGE_NAME} --format "{{.ID}} {{.Tag}}" | \
                        grep -v latest | \
                        tail -n +4 | \
                        awk '{print $1}' | \
                        xargs -r docker rmi -f || true
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        
        failure {
            echo 'Pipeline failed!'
        }
        
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
