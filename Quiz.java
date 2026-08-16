import java.util.Scanner;

public class Quiz {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String[] questions = {
            "1. Java kisne develop kiya?",
            "2. Java ka extension kya hota hai?",
            "3. Java me main method kya hota hai?",
            "4. Java me class banane ke liye kaunsa keyword use hota hai?",
            "5. Java kaun si type ki language hai?"
        };

        String[][] options = {
            {"A. Bill Gates", "B. James Gosling", "C. Elon Musk", "D. Dennis Ritchie"},
            {"A. .html", "B. .py", "C. .java", "D. .cpp"},
            {"A. Program ka starting point", "B. Variable", "C. Class", "D. Object"},
            {"A. function", "B. class", "C. define", "D. new"},
            {"A. Object-Oriented", "B. Markup", "C. Query", "D. Assembly"}
        };

        char[] answers = {'B', 'C', 'A', 'B', 'A'};

        int score = 0;

        System.out.println("=================================");
        System.out.println("       JAVA QUIZ APPLICATION");
        System.out.println("=================================");

        for (int i = 0; i < questions.length; i++) {

            System.out.println("\n" + questions[i]);

            for (String option : options[i]) {
                System.out.println(option);
            }

            System.out.print("Your Answer: ");
            char userAnswer = Character.toUpperCase(sc.next().charAt(0));

            if (userAnswer == answers[i]) {
                System.out.println("Correct Answer! ✅");
                score++;
            } else {
                System.out.println("Wrong Answer! ❌");
                System.out.println("Correct Answer: " + answers[i]);
            }
        }

        System.out.println("\n=================================");
        System.out.println("           QUIZ RESULT");
        System.out.println("=================================");

        System.out.println("Total Questions : " + questions.length);
        System.out.println("Correct Answers : " + score);
        System.out.println("Wrong Answers   : " + (questions.length - score));
        System.out.println("Your Score      : " + score + "/" + questions.length);

        double percentage = (score * 100.0) / questions.length;

        System.out.println("Percentage      : " + percentage + "%");

        if (percentage >= 80) {
            System.out.println("Excellent! 🏆");
        } else if (percentage >= 50) {
            System.out.println("Good Job! 👍");
        } else {
            System.out.println("Keep Practicing! 📚");
        }

        sc.close();
    }
}