# Playwright Kata

Goal: write end-to-end browser integration tests for a web application

## Step 1

Choose a programming language and make sure you can run the `add-team`
test - you'll have to fix the URL (see the TODO comment)

## Step 2

Use the `playwright codegen` command to generate *one* test and add it to the repository in a new file next to the existing add-team test.

In Java, the command line looks like this:

```console
$ ./mvnw exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen https://<letter>.<group>.hr.dmerej.info"
```


## Step 3

* Add a test for one of the bugs you’ve fond during the first session - but *without using codegen* this time.
* Refactor so that you use a test fixture between each test to reset the database

## Step 4

Add tests for all the bugs you’ve found - make sure they are failing for the right reason, with good error messages.

## Step 5

Refactor using the [Page object model](https://playwright.dev/python/docs/pom)

## Step 6

Compare the code written using the Page Object Model with the one playwright automatically generated.
