node {
  stage ('checkout code from git hub') {
    git credentialsId: '7cc4b1b9-234e-479a-9325-3fb18394931b', url: 'https://github.com/rohini1211/R1.git'
  }
 
  stage('intall cypress') {
    sh "npm install --save -dev cypress"
     sh "npx cypress run"
    
  }
}
