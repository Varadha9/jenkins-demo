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
            }
        }
        stage('Serve') {
            steps {
                bat 'taskkill /F /IM python.exe /T 2>nul || exit 0'
                bat 'start "WebServer" /MIN python -m http.server 8000 --directory C:\\Deploy'
                bat 'ping -n 3 127.0.0.1 > nul'
                bat 'echo Website is live at http://localhost:8000'
            }
        }
    }

    post {
        success { echo 'Website live at http://localhost:8000' }
        failure { echo 'Pipeline failed!' }
    }
}
