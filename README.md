# Overview

The Daily Task Planner is a mobile application developed using React Native and Expo. The application allows users to organise their daily activities by creating and managing a list of tasks. Users can add new tasks, view the total number of tasks, and delete tasks with a confirmation dialog. Tasks are automatically saved using local storage (AsyncStorage), allowing them to remain available even after the application has been closed and reopened.

The application is simple and intuitive to use. When the application starts, users are presented with the Home screen, which provides an overview of the application's purpose and features. Users can then navigate to the Tasks screen where they can enter new tasks, manage their task list, and organise their daily activities.

The purpose of creating this application was to further develop my software engineering skills by learning mobile application development using React Native and Expo. Throughout this project I learned how to create a multi-screen application, navigate between screens, respond to user input, manage application state using React Hooks, validate user input, and implement persistent local storage using AsyncStorage.

## Software Demo Video

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

## Development Tools

The Daily Task Planner was developed using the following tools:

- Visual Studio Code for writing and editing the source code.
- Node.js and npm to manage project dependencies.
- Expo to create, build, and run the React Native application.
- Android Studio and the Android Emulator for testing the application during development.
- Git for version control.
- GitHub for publishing and managing the project repository.

## Programming Language and Libraries

The application was developed using **TypeScript** with **React Native** and **Expo**.

The following libraries and frameworks were used:

- React Native
- Expo
- Expo Router
- React Hooks (`useState` and `useEffect`)
- AsyncStorage (`@react-native-async-storage/async-storage`) for persistent local storage

# Useful Websites

The following resources were helpful while developing this project:

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [AsyncStorage Documentation](https://react-native-async-storage.github.io/async-storage/)
- [Android Studio Documentation](https://developer.android.com/studio)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

# Future Work

The following improvements could be added in future versions of the application:

- Allow users to mark tasks as completed instead of deleting them.
- Add due dates and reminders for tasks.
- Categorise tasks using labels or priorities.
- Allow users to edit existing tasks.
- Add task search and filtering options.
- Improve the user interface with custom icons, animations, and themes.