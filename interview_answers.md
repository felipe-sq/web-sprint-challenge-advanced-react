# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    Some of the main differences is that functional components use hooks to manage both side effects and state, whereas stateful components use lifecycle methods (like componentDidMount or componentDidUpdate).

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    A componentWillMount function would previously be called before render(); however, this is currently not considered safe to use, and instead one can use componentDidMount. We would call componentWillUpdate (or componentDidUpdate) during the mounting phase.

3. Define stateful logic.
    Stateful logic is the process of using a State component to set a state object, along with any handler functions or user actions, and which can be reused across different components within an app. It allows for one to set state (or allow state to be updated) in a single component for simpler, cleaner code. 
4. What are the three step of creating a successful test? What is done in each phase?

The three steps for successful testing are: Arrange, Act and Assert. 

Arrange: In this step, we are setting up and arranging our tests, similar to creating an outline for what we are wanting to test.

Act: This is the step where we write the code that will enable the tests to run. This is done by calling a method or function, for example, to see what the result will be. 

Assert: In this third step, we verify that we are receiving meaningful results to our tests. This is where we check to see if our tests are actually returning usable data.