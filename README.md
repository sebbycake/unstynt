# unStynt

Connecting SMEs to student talents. 

## About The Project

We aim to provide a cost-effective solution to help SMEs scale in digital and creative ways, while enabling students to gain real-world working experiences from established businesses.



### Built With

* [gatsby.js](https://www.gatsbyjs.com/) - React.js web framework

## Getting Started

### Prerequisites

* [node.js and npm](https://nodejs.org/en/)
* [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)


### Installation

1. Install dependencies on your local machine:

```
git clone https://github.com/sebbycake/unstynt.git
npm install
```

### Usage

Run the code on node server:
```
gatsby develop
```

## Deployment

Follow the steps below to deploy gatsby app:

1. Netlify

```
npm install -g netlify-cli
cd <gatsby_project_name>
gatsby build
```


Finally, to deploy, run:
```
netlify deploy
```
You will be prompted to provide a publish directory. Enter `public`, as Gatsby will generate the production site in the `public` folder.


After viewing the draft URL given to you and everything is running smoothly, run:
```
netlify deploy --prod
```



## License

This project is licensed under the MIT License.