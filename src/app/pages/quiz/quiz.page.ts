import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})
export class QuizPage implements OnInit {

  // Almacén de todas las preguntas del quiz
  allQuestions: any[] = [];
  
  // Variables de estado
  currentQuestionIndex: number = 0;
  selectedAnswer: any = null;
  score: number = 0;
  quizFinished: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.loadQuestions();
  }

  // Carga todas las preguntas del quiz
  loadQuestions() {
    this.allQuestions = [
      {
        question: '¿Cuál es el objetivo principal del proyecto de tesis?',
        options: [
          'Crear una app móvil con Ionic',
          'Analizar transacciones en tiempo real para detectar fraudes',
          'Usar bases de datos NoSQL',
          'Implementar un backend robusto'
        ],
        correctAnswer: 'Analizar transacciones en tiempo real para detectar fraudes'
      },
      {
        question: '¿Qué tecnologías se usan en el Frontend de la aplicación móvil?',
        options: [
          'Python y Flask',
          'Ionic y Angular',
          'MongoDB y NoSQL',
          'Scikit-learn y TensorFlow'
        ],
        correctAnswer: 'Ionic y Angular'
      },
      {
        question: '¿Qué algoritmo principal de Machine Learning se menciona en el tab "Modelo IA"?',
        options: [
          'Redes Neuronales',
          'Regresión Logística',
          'Random Forest',
          'Support Vector Machines (SVM)'
        ],
        correctAnswer: 'Random Forest'
      },
      {
        question: '¿Cuál es la tecnología de Backend usada para la API REST?',
        options: [
          'Angular',
          'MongoDB',
          'Python con Flask/Django',
          'Ionic'
        ],
        correctAnswer: 'Python con Flask/Django'
      },
      {
        question: '¿Cuál NO es una ventaja mencionada del algoritmo Random Forest?',
        options: [
          'Resistente al sobreajuste (overfitting)',
          'Eficiente con grandes volúmenes de datos',
          'Es el algoritmo más rápido para entrenar',
          'Ambas "Resistente al sobreajuste" y "Eficiente..."'
        ],
        correctAnswer: 'Es el algoritmo más rápido para entrenar'
      },
      {
        question: '¿Qué tipo de base de datos se utiliza en la arquitectura?',
        options: [
          'MySQL (SQL)',
          'PostgreSQL (SQL)',
          'MongoDB (NoSQL)',
          'Firebase'
        ],
        correctAnswer: 'MongoDB (NoSQL)'
      },
      {
        question: '¿Cuál es el PRIMER paso en el Flujo de Datos (Pipeline) del modelo?',
        options: [
          'Limpieza',
          'Predicción',
          'Ingeniería de Características',
          'Recolección'
        ],
        correctAnswer: 'Recolección'
      },
      {
        question: '¿Qué métrica del modelo alcanzó un 99.82%?',
        options: [
          'Sensibilidad (Recall)',
          'Puntuación F1',
          'Precisión (Accuracy)',
          'Velocidad de respuesta'
        ],
        correctAnswer: 'Precisión (Accuracy)'
      },
      {
        question: '¿Qué tecnologías se mencionan para las librerías de Machine Learning en el Backend?',
        options: [
          'Ionic y Angular',
          'Scikit-learn & TensorFlow',
          'MongoDB y Python',
          'Solo Python'
        ],
        correctAnswer: 'Scikit-learn & TensorFlow'
      },
      {
        question: '¿Cuál de estos SÍ es un objetivo listado del proyecto?',
        options: [
          'Crear una interfaz de usuario atractiva',
          'Usar solo tecnologías de Google',
          'Asegurar el procesamiento de datos en tiempo real',
          'Publicar la app en la App Store'
        ],
        correctAnswer: 'Asegurar el procesamiento de datos en tiempo real'
      }
    ];
  }

  // Se llama al seleccionar una opción
  selectAnswer(answer: any) {
    this.selectedAnswer = answer;
  }

  // Avanza a la siguiente pregunta o finaliza el quiz
  nextQuestion() {
    // 1. Validar respuesta y sumar al score
    if (this.selectedAnswer === this.allQuestions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    // 2. Comprobar si es la última pregunta
    if (this.currentQuestionIndex < this.allQuestions.length - 1) {
      // Ir a la siguiente pregunta
      this.currentQuestionIndex++;
      this.selectedAnswer = null; // Reiniciar la selección
    } else {
      // Finalizar el quiz
      this.quizFinished = true;
    }
  }

  // Reinicia todas las variables al estado inicial
  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.quizFinished = false;
  }

  // Regresa a la página principal de tabs
  goBack() {
    this.navCtrl.navigateBack('');
  }

}
