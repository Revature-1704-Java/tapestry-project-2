pipeline{

agent any

stages {
   stage('Preparation') { 
      steps{
	  sh 'kill %-' //kill last background task, which should be another instance of the webserver
	sh 'service tapestry stop'
      	git branch: 'master', url: 'https://github.com/Revature-1704-Java/tapestry-project-2.git'
      }
   }
   stage('Build') {
       steps{       
       //move dist folder into our resources folder for our maven project
       /*sh '''cd front
            ng build -p
            mv dist ../Tapestry/src/main/resources/'''*/
            
      // Run the maven build
        
		slackSend color: '#888888', message: 'Building Master Project'
        sh '''cd Tapestry
        mvn clean package'''
       }
   }
   stage('Results') {
      steps{
      junit '**/target/surefire-reports/*.xml'
      archive 'target/*.jar'
      }
   }
   
   stage('Deploy'){
   	steps{
       slackSend color: '#0F0F0F', message: 'Master Build was successful'
       //sh 'service tapestry start'
	   sh 'nohup java -jar test/selenium-server.jar > /dev/null 2>&1 &'//start jar in background
       slackSend color: '#000000', message: 'Master Build was Deployed'
	}
   }
}
}
