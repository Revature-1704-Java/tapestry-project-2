pipeline{

agent any

stages {
   stage('Preparation') { 
      steps{
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
	   
	   post{
		fail		ure{
			slackSend color: '#FFFFFF', message: 'Master Building Failed'
		}
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
       //sh 'java -jar 0.0.1-SNAPSHOT.jar'
       slackSend color: '#000000', message: 'Master Build was Deployed'
	}
   }
}
}
