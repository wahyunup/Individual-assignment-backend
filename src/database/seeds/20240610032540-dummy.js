'use strict';

const {
  bab,
  babsubbab,
  kelas,
  kelasmodepembelajaran,
  matapelajaran,
  matapelajaranbab,
  material,
  modepembelajaran,
  kelasmodepembelajaranmatapelajaran,
  subbab,
  subbabmaterial,
  user,
  userbab,
  usersubbab,
  usermaterial
} = require("../../models")


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await bab.destroy({ truncate:true})
    await babsubbab.destroy({ truncate:true})
    await kelas.destroy({ truncate:true})
    await kelasmodepembelajaran.destroy({ truncate:true})
    await matapelajaran.destroy({ truncate:true})
    await matapelajaranbab.destroy({ truncate:true})
    await material.destroy({ truncate:true})
    await modepembelajaran.destroy({ truncate:true})
    await kelasmodepembelajaranmatapelajaran.destroy({ truncate:true})
    await subbab.destroy({ truncate:true})
    await subbabmaterial.destroy({ truncate:true})
    await user.destroy({ truncate:true})
    await userbab.destroy({ truncate:true})
    await usermaterial.destroy({ truncate:true})
    await usersubbab.destroy({ truncate:true})
-

    await queryInterface.bulkInsert('users', [
      {
        userid: 1,
        name: "brandon",
        email: "bran@love.com",
        password: "$2a$10$6WKOwdg51mnAEOrqMI/HPuvv79pJGdLWQ1PXKa/wYI5W80uG3py4m" // lain, 10 rounds bcrypt
      },
      {
        userid: 2,
        name: "john smith",
        email: "johnsmitch@example.com",
        password: "$2a$10$InHHOYfgKTFn7df/99qxKuMKGUadwefbwGYRkBge4HMQMc6D3ssF6" // pass, 10 rounds bcrypt
      },
    ])

    await queryInterface.bulkInsert('babs', [
      {
        babid: 1,
        name: "bab 1",
        freeamount: 3
      },
      {
        babid: 2,
        name: "bab 2",
        freeamount: 5
      }
    ])

    await queryInterface.bulkInsert('kelas', [
      {
        kelasid: 1,
        name: "kelas 1"
      },
      {
        kelasid: 2,
        name: "kelas 2"
      }
    ])

    await queryInterface.bulkInsert('matapelajarans', [
      {
        matapelajaranid: 1,
        name: "matapelajaran 1"
      },
      {
        matapelajaranid: 2,
        name: "matapelajaran 2"
      },
      {
        matapelajaranid: 3,
        name: "matapelajaran 3"
      }
    ])

    await queryInterface.bulkInsert('subbabs', [
      {
        subbabid: 1,
        name: "subbab 1",
        freestatus: true
      },
      {
        subbabid: 2,
        name: "subbab 2",
        freestatus: false
      }
    ])


    
    await queryInterface.bulkInsert('materials', [
      {
        materialid: 1,
        name: "material 1"
      },
      {
        materialid: 2,
        name: "material 2"
      }
    ])

    await queryInterface.bulkInsert('usermaterials', [
      {
        materialid: 1,
        userid: 1,
        status: true
      },
      {
        materialid: 2,
        userid: 1,
        status: true
      }
    ])

    await queryInterface.bulkInsert('userbabs', [
      {
        babid: 1,
        userid: 1,
        progress: 50.20
      },
      {
        babid: 2,
        userid: 1,
        progress: 20.20
      }
    ])

    await queryInterface.bulkInsert('usersubbabs', [
      {
        subbabid: 1,
        userid: 1,
        progress: 50.20
      },
      {
        subbabid: 2,
        userid: 1,
        progress: 20.20
      }
    ])

    await queryInterface.bulkInsert('kelasmodepembelajarans', [
      {
        kelasid: 1,
        modepembelajaranid: 1
      },
      {
        kelasid: 2,
        modepembelajaranid: 2
      },
      {
        kelasid: 1,
        modepembelajaranid: 2
      }
    ])

    await queryInterface.bulkInsert("modepembelajarans", [
      {
        modepembelajaranid: 1,
        name: "mode pembelajaran 1"
      },
      {
        modepembelajaranid: 2,
        name: "mode pembelajaran 2"
      }
    ])

    await queryInterface.bulkInsert('kelasmodepembelajaranmatapelajarans', [
      {
        kelasid: 1,
        matapelajaranid: 1,
        modepembelajaranid: 1
      },
      {
        kelasid: 1,
        matapelajaranid: 2,
        modepembelajaranid: 2
      },
      {
        kelasid: 2,
        matapelajaranid: 3,
        modepembelajaranid: 1
      },
    ])

    await queryInterface.bulkInsert('subbabmaterials', [
      {
        subbabid: 1,
        materialid: 1
      },
      {
        subbabid: 2,
        materialid: 2
      }
    ])

    await queryInterface.bulkInsert('babsubbabs', [
      {
        subbabid: 1,
        babid: 1
      },
      {
        subbabid: 2,
        babid: 2
      }
    ])

    await queryInterface.bulkInsert('matapelajaranbabs', [
      {
        matapelajaranid: 1,
        babid: 1
      },
      {
        matapelajaranid: 2,
        babid: 2
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
