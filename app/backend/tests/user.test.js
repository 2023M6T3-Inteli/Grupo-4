const service = require('../services/user')

const User = new service.User()

let idToDelete;

describe('Creating User', () => {
    it('Should not create a user with the same email', async () => {
        const user = {
            email: "pepehaggeb@gmail.com",
            name: "Pedro Hagge Baptista",
            area: "Software Engineer",
            password: "123456",
            tags: '["AWS","JavaScript","Node.Js","Express"]',
        }

        try {
            const result = await User.Create(user.email, user.password, user.name, user.area, user.tags)

            return expect(result.name).toBe(user.name)
        } catch (err) {
            return expect(err.message).toBe("User already exists")
        }
    })

    it('Should create a user', async () => {
        const user = {
            email: "pepehaggehb@gmail.com",
            name: "Pedro Hagge Baptista",
            area: "Software Engineer",
            password: "123456",
            tags: '["AWS","JavaScript","Node.Js","Express"]',
        }

        const result = await User.Create(user.email, user.password, user.name, user.area, user.tags)

        idToDelete = result.id

        return expect(result.name).toBe(user.name)
    })

    it('Should get a user by id', async () => {
        const id = "a7f53818-fe6e-4fa7-a9e6-df88d7432ab0"

        const result = await User.getUser(id)

        return expect(result.id).toBe(id)
    })

    it("Should update an user by id", async () => {
        const id = "a7f53818-fe6e-4fa7-a9e6-df88d7432ab0"

        const user = {
            name: "Pedro Hagge Baptista",
        }

        const result = await User.update(id, user)

        return expect(result.name).toBe(user.name)
    })

    it("Should delete an user by id", async () => {
        const id = "a7f53818-fe6e-4fa7-a9e6-df88d7432ab0"

        const result = await User.delete(idToDelete)

        return expect(result).toBe("User deleted with success")
    })
})
    