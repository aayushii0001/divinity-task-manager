![EnhypenHypenchivesGIF](https://github.com/user-attachments/assets/e1cbabec-6f00-4256-8f45-234493d92ec3)# Divinity - Task Manager

A modern, lightweight task management application built with React. Divinity helps you organize, track, and manage your daily tasks with ease. All your tasks are automatically saved to your browser's local storage, so you never lose your data.

## Features

✨ **Core Features:**
- ➕ **Add Tasks** - Create new tasks with a simple input field
- ✏️ **Edit Tasks** - Modify existing tasks by clicking the edit button
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Mark Complete** - Check off tasks as you complete them
- 👁️ **Toggle Visibility** - Show or hide completed tasks
- 💾 **Persistent Storage** - All tasks are saved to browser localStorage automatically

## Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS
- **Icons:** React Icons (FaEdit, MdDelete, CgAddR)
- **ID Generation:** UUID v4
- **State Management:** React Hooks (useState, useEffect)

## Preview 📸
<img width="1446" height="852" alt="image" src="https://github.com/user-attachments/assets/6a6081c3-6718-4e69-b3be-7301c3609fa1" />


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/divinity-task-manager.git
   cd divinity-task-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Application styles
├── components/
│   └── Navbar.js       # Navigation component
└── index.js            # Entry point
```

## Usage

### Adding a Task
1. Type your task in the input field under "Add a Task"
2. Click the **Save** button (button is disabled if task is 3 characters or less)
3. Your task will appear in the task list

### Managing Tasks
- **Check a task:** Click the checkbox next to any task to mark it complete
- **Edit a task:** Click the blue edit button to modify a task
- **Delete a task:** Click the red delete button to remove a task
- **Hide completed tasks:** Uncheck the "Show Completed" checkbox to hide finished tasks

## Component Overview

### App Component
Main component that handles:
- Task state management
- Local storage synchronization
- Task CRUD operations
- UI rendering for the task list

### Key Functions

| Function | Purpose |
|----------|---------|
| `handleChange()` | Updates task input field value |
| `handleSave()` | Adds new task to the list |
| `handleCheckbox()` | Toggles task completion status |
| `handleEdit()` | Prepares task for editing |
| `handleDelete()` | Removes task from list |
| `saveToLocalStorage()` | Persists tasks to browser storage |
| `toggleHide()` | Shows/hides completed tasks |

## Local Storage

Tasks are automatically saved to browser localStorage under the key `"tasks"`. Each task object contains:

```javascript
{
  id: "unique-uuid-string",
  task: "Task description",
  isCompleted: false
}
```

## Features in Detail

### Input Validation
- Save button is disabled if task text is 3 characters or less
- Prevents saving empty or too-short tasks

### Responsive Design
- Mobile-friendly layout with Tailwind CSS
- Centered container on desktop (md breakpoint: w-1/2)
- Full width on mobile with margin adjustments

### Visual Feedback
- Completed tasks show strikethrough text
- Hover effects on buttons
- Disabled state styling for the Save button

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- LocalStorage API
- React 18

## Future Enhancements

Potential features for future versions:
- Task categories/tags
- Priority levels
- Due dates
- Task filtering and sorting
- Dark mode
- Cloud sync / backend database
- Task notes/descriptions
- Recurring tasks

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub or contact the maintainer.

---

**Happy Task Managing! 🚀**
