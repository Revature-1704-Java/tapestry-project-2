pipeline{

agent any

stages {
   stage('Preparation') { 
      steps{
      	git branch: 'Backend' 'https://github.com/Revature-1704-Java/tapestry-project-2/'
      }
   }
   stage('Build') {
       steps{       
       //move dist folder into our resources folder for our maven project
       /*sh '''cd front
            ng build -p
            mv dist ../Tapestry/src/main/resources/'''*/
            
      // Run the maven build
        
		slackSend color: '#888888', message: 'Building Project'
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
       //sh 'java -jar 0.0.1-SNAPSHOT.jar'
       slackSend color: '#0F0F0F', message: 'Build was successful '
	}
   }
}
}