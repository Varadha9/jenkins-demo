pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Validate') {
            steps {
                bat 'echo Checking required files...'
                bat 'if exist index.html (echo index.html found) else (exit 1)'
                bat 'if exist styles.css (echo styles.css found) else (exit 1)'
                bat 'if exist script.js (echo script.js found) else (exit 1)'
            }
        }
        stage('Deploy') {
            steps {
                bat 'if not exist C:\\Deploy mkdir C:\\Deploy'
                bat 'copy /Y index.html C:\\Deploy\\index.html'
                bat 'copy /Y styles.css C:\\Deploy\\styles.css'
                bat 'copy /Y script.js C:\\Deploy\\script.js'
                bat 'echo Website deployed to C:\\Deploy'
            }
        }
    }

    post {
        success { echo 'Website deployed successfully! Open C:\\Deploy\\index.html' }
        failure { echo 'Pipeline failed!' }
    }
}
