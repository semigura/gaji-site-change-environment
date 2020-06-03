<h1 align="center">
  Gaji-Labo 2018
</h1>

## 🚀 Quick start

1.  **Clone this repository**

    ```sh
    git clone git@github.com:Gaji-Labo/gaji-renewal.git
    ```

2.  **Setup**

    ```sh
    # if you need
    ndenv install v10.13.0
    npm install -g yarn
    # install dependencies
    yarn
    ```

3.  **Start development**

    ```sh
    yarn dev
    ```

    Running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

    ```sh
    yarn storybook
    ```

    Running at `http://localhost:6006`

4.  **Test**

    ```sh
    yarn test
    ```

### 👀 Visual regression test

1.  **Creating reference files**

    ```sh
    backstop reference
    ```

2.  **Generating test bitmaps**

    ```sh
    backstop test
    ```

    This will create a new set of bitmaps in `backstop_data/` directory.

More:

Setting the bitmap and script directory paths in `backstop.json` config file.

refs: https://github.com/garris/BackstopJS

## 🌎 Deployment

Automatic deploy to Netlify when your PR merge to the develop branch.

https://tender-visvesvaraya-f04a66.netlify.com/

And! Deploy all branches pushed to the repository.  
refs: https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
