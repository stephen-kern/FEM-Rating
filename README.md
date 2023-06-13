# Rating Component - FRONT END MENTOR CHALLENGE

The Rating component allows users to provide feedback by selecting a rating and submitting it. It displays a star icon, a prompt asking for feedback, rating options, and a submit button. Once the user submits the rating, a feedback message is displayed.

## Deployment Link
[FEM-Rating](https://main--jazzy-lollipop-04fb1a.netlify.app/)
## Components

The project consists of the following components:

1. `Rating`: The main component that manages the rating functionality, state, and rendering. It includes the star icon, prompt, rating options, and submit button. When the user submits the rating, it renders the `Feedback` component.

2. `RatingNumbers`: A child component of `Rating` that renders the rating options as buttons. It receives the current rating and a function to handle rating changes as props.

3. `Feedback`: A component rendered after the user submits the rating. It displays the selected rating, a thank you message, and a feedback message.

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/stephen-kern/FEM-Rating.git>
## Dependencies

The project has the following dependencies:

    React: A JavaScript library for building user interfaces.

## Contributing

Contributions to this project are welcome! If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.

