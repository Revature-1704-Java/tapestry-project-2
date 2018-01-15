pipeline{

agent any

stages {
   stage('Preparation') { 
      steps{
      	git 'https://github.com/Revature-1704-Java/tapestry-project-2'
      }
   }

   stage('Build') {
       steps{
       
	   slackSend color: '#888888', message: 'Building ${BRANCH_NAME}'
       //move dist folder into our resources folder for our maven project
       /*sh 'ng build -p*'/
            
      // Run the maven build
        
        sh '''cd Tapestry
        mvn clean package'''
       }
	}
  
   stage('Results') {
      steps{
	  slackSend color: '#0F0F0F', message: 'Build was successful, Saving JUnit results'
      junit '**/target/surefire-reports/*.xml'
      archive 'target/*.jar'
      }
   }
   
   stage('Deploy'){
   	steps{
       //sh 'java -jar 0.0.1-SNAPSHOT.jar'
	}
   }
  }
}