# QuizMe

This system is designed to be used by teachers who would like to test thier students with code related quistions.

## Database

The Database that I will use is MySQL, and it will include the following tables:

- users
- quizes
- submissions
- labels
- quiz_labels
- questions
- fields

and the connections will be automatically as follows:

![Image of ERD](./readmeFiles/‪SQL-Tables.png)

## Server

On the server side we will have 6 entry points:

- Get the list of all the quizes.
- Get all the submissions of specific quize.
- Get all the questions of a specific quize.
- Get all fields of a specific question.
- Get a list of all the users.
- Get a list of all the submissions submit by a specific user.

## Client

Our client side is divided to two sections- teachers side, and student side.

After student logs in he will be able to see all the quizes avalibale to him (The quizes he already submited, and the quizes he still need to submit).

After teacher logs in he will see a list of all the quizes he posted and in each quize a list of all the submissions.

## Quiz Page

Each one of the quizes will look as follows:

- Title- The subject of the quiz.
- number of questions on the quiz.
- time left to finish the quiz.
- questions.
- submit button.



