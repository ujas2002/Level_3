const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      var req = ""
      var req_lst = []
      all.forEach((task) => {
        if (today > task.dueDate) {
          req_lst.push(task)
        }
      })
      return req_lst
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      var due_today_lst = [];
        all.forEach((task) => {
            if (task.dueDate === today) {
                due_today_lst.push(task);
            }
        })
    return due_today_lst;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      var due_later_lst = [];
        all.forEach((task) => {
            if (task.dueDate > today) {
                due_later_lst.push(task);
            }
        })
    return due_later_lst;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
        var display_list = []
        list.forEach((task) => {
        if (task.completed === false) {
          if (task.dueDate===today) {
            display_list.push(`[ ] ${task.title}`)
          }
          else {
            display_list.push(`[ ] ${task.title} ${task.dueDate}`)
          }
        }
        else {
          if (task.dueDate===today) {
            display_list.push(`[x] ${task.title}`)
          }
          else {
            display_list.push(`[x] ${task.title} ${task.dueDate}`)
          }          
        }
      }) 
    return display_list.join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
