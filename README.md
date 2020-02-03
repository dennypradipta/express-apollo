# Express Apollo

A simple example of GraphQL Apollo Server using Express.

## How to Run

- Install [PostgreSQL](https://www.postgresql.org/)
- Clone this repository using `git clone https://github.com/dennypradipta/express-apollo.git` command
- Create .env file using the .env.example inside the express-apollo directory to configure your database connection
- Run `npm install` to install all the depedencies
- Run `npm run seed` to seed database
- Run `npm run start` to start

## Query Example

### Get all songs

```
{
  songs {
    name
    album
  }
}
```

### Get song by ID

```
{
  song(id:"55f1994a-69cf-4358-a1c6-fee93003047d") {
    id
    name
    album
  }
}
```

### Get all artists

```
{
  artists {
    id
    name
  }
}
```

### Get artist by ID

```
{
  artist(id: "a7b943a1-ee24-471c-a153-1a71737c31c5") {
    id
    name
  }
}
```

### Get all songs from artist by artist id

```
{
  artist(id: "a7b943a1-ee24-471c-a153-1a71737c31c5") {
    id
    name,
    songs {
      name
      album
    }
  }
}
```

# References

- [From REST to GraphQL: A different way to create an API (with Apollo & Node.js)](https://blog.logrocket.com/from-rest-to-graphql/)
- [DirkWolthuis/graphql-express-migrating-mysql](https://github.com/DirkWolthuis/graphql-express-migrating-mysql)
