import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      website: "http://eloquentjavascript.net/",
      status: "available",
    },
    {
      isbn: "9781491943533",
      title: "Practical Modern JavaScript",
      subtitle: "Dive into ES6 and the Future of JavaScript",
      author: "Nicolás Bevacqua",
      published: "2017-07-16T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 334,
      description:
        "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
      website: "https://github.com/mjavascript/practical-modern-javascript",
      status: "available",
    },
    {
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      subtitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      published: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      description:
        "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
      website: "https://leanpub.com/understandinges6/read",
      status: "available",
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      published: "2014-04-08T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 460,
      description:
        "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
      website: "http://speakingjs.com/",
      status: "available",
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      published: "2012-08-30T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description:
        "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      website:
        "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
      status: "available",
    },
    {
      isbn: "9798602477429",
      title: "You Don't Know JS Yet",
      subtitle: "Get Started",
      author: "Kyle Simpson",
      published: "2020-01-28T00:00:00.000Z",
      publisher: "Independently published",
      pages: 143,
      description:
        "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
      website:
        "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
      status: "available",
    },
    {
      isbn: "9781484200766",
      title: "Pro Git",
      subtitle: "Everything you neeed to know about Git",
      author: "Scott Chacon and Ben Straub",
      published: "2014-11-18T00:00:00.000Z",
      publisher: "Apress; 2nd edition",
      pages: 458,
      description:
        "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
      website: "https://git-scm.com/book/en/v2",
      status: "available",
    },
    {
      isbn: "9781484242216",
      title: "Rethinking Productivity in Software Engineering",
      subtitle: "",
      author: "Caitlin Sadowski, Thomas Zimmermann",
      published: "2019-05-11T00:00:00.000Z",
      publisher: "Apress",
      pages: 310,
      description:
        'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
      website: "https://doi.org/10.1007/978-1-4842-4221-6",
      status: "available",
    },
  ]);
  const [members, setMembers] = useState([
    {
      name: "Shyam",
      email: "shyamjaiswal@gmail.com",
      password: "1234",
      books: [],
    },
    { name: "Bob", email: "bob32@gmail.com", password: "1234", books: [] },
    { name: "Jai", email: "jai87@gmail.com", password: "1234", books: [] },
  ]);

  const [loggedInStatus, setLoggedInStatus] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [username, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();
    for (var i = 0; i < members.length; i++) {
      if (members[i].email === username && members[i].password === password) {
        setLoggedIn(i);
        alert("Log in success!");
        return;
      }
    }
    alert("log in failed");
  }

  function logout() {
    setLoggedIn(undefined);
    setUserName(undefined);
    setPassword(undefined);
  }

  function rent(index, title) {
    console.log(loggedIn);
    var updatedMembers = [...members];
    var updatedBooks = [...books];
    updatedMembers[loggedIn].books.push(title);
    updatedBooks[index].status = "unavailable";
    setMembers(updatedMembers);
    setBooks(updatedBooks);
    console.log(members);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Student Library Program</title>
        <meta name="description" content="Student Library Program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="bg-gray-50 w-screen h-20 text-center pt-3 text-5xl">
          Student Library Program
        </div>
        <div className="bg-gray-200 h-14 text-center pt-3 w-screen flex flex-row pl-5 mb-3">
          {loggedIn === undefined ? (
            <form onSubmit={handleSubmit}>
              <label className="pr-2">
                Username:
                <input
                  type="text"
                  name="username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label className="pr-2">
                Password:
                <input
                  type="text"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <input
                className="cursor-pointer border-2 border-gray-500 rounded-lg p-1"
                type="submit"
                value="Submit"
              />
            </form>
          ) : (
            <button className="" onClick={() => logout()}>
              Log out
            </button>
          )}
        </div>
        <p className="text-4xl mb-3">Books</p>
        <div className="grid grid-cols-3 gap-3 items-center ">
          {books.map((item, index) => (
            <div
              key={index}
              className="flex flex-col align-middle items-center justify-between  mr-3 border-2 border-gray-300 h-80 w-64   p-2 overflow-scroll overflow-x-hidden"
            >
              <div>
                <Image
                  src="/book.png"
                  width="100px"
                  height="100px"
                  alt="picture of the book"
                />
              </div>

              <p className="mt-5">
                <b>Title:</b> {item.title}
              </p>
              <p>
                <b>Subtitle: </b>
                {item.subtitle}
              </p>
              <p>
                <b>Author:</b> {item.author}
              </p>
              <p>
                <b>Pages:</b> {item.pages}
              </p>
              <p>
                <b>Description:</b> {item.description}
              </p>
              <p>
                <b>Isbn:</b> {item.isbn}
              </p>
              {loggedIn !== undefined && item.status === "available" ? (
                <div className="flex flex-col  align-middle items-center ">
                  <button
                    className="bg-blue-500 rounded-md w-20"
                    onClick={() => rent(index, item.title)}
                  >
                    Rent
                  </button>
                </div>
              ) : (
                <p className="m-3 text-red-900 text-center">
                  {" "}
                  {item.status === "available" ? "Available" : "Unavailable"}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="text-4xl mb-3 mt-3">Members</p>
        <div className="grid grid-cols-3 gap-3 items-center ">
          {members.map((item, index) => (
            <div
              key={index}
              className="flex flex-col align-middle items-center text-left mr-3 border-2 border-gray-300 max-h-60 p-2 overflow-scroll overflow-x-hidden"
            >
              <div>
                <Image
                  src="/user.png"
                  width="100px"
                  height="100px"
                  alt="picture of the user"
                />
              </div>

              <p className="my-3">Name: {item.name}</p>
              <p className="my-3">Email: {item.email}</p>
              <p className="my-3">Password: {item.password}</p>
              <p className="font-semibold">List of rented book:</p>
              {item.books.map((item, index) => {
                console.log(item);
                return <p key={index}>{item}</p>;
              })}
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
