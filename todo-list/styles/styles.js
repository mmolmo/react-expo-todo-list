import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#9D2FD4',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
    alignContent: 'center',
    position: 'absolute',
    bottom: 0,             // Align to bottom
    left: 0,               // Ensure it spans the full width
    right: 0,
  },
  navIcon: {
    color: 'white',
    fontSize: 28,
    height: 36,
    width: 36,
    color: '#FCFCFF',
    cursor: 'pointer',
  },
  checkBox: {
    zIndex: 10, // Higher index than other elements
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F7E9FD',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 300,
  },
  inputContainer: {
    maxWidth: 20,
  },
  input: {
    backgroundColor: 'white', // Ensures the input has a white background
    borderRadius: 8, // Optional: Rounds the edges
    paddingHorizontal: 10, // Adds horizontal padding inside the input field
    minHeight: 20, // Makes sure input isn't too small
    height: 65, // Ensures it's not too short
    borderWidth: 1, // Adds a border for clarity
    borderColor: '#ccc', // Light gray border
    maxWidth: '80%',
  },
  createTaskInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: 400, // Ensures it's not too wide
    backgroundColor: '#F7E9FD',
    padding: 24,
    borderRadius: 10, // Rounds the container
    maxHeight: 150, // Ensures it's not too tall
  },
  taskListWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  createTaskButton: {
    backgroundColor: '#9D2FD4',
    height: 65,
  },
  taskItem: {
    borderWidth: 2,
    borderColor: '#D595F5',
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
  },
  completedtaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 16,
    textDecorationStyle: 'solid',
  },
  todotaskText: {
    fontSize: 16,
    color: 'black',
  },
  trashIcon: {
    color: '#FB59CA',
    cursor: 'pointer',
  }  
});

export default styles;
