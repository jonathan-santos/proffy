import React from 'react'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

const TeacherForm = () => {
  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas!'
        description='O primeiro passo é preencher este formulário de inscrição'
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input
            name='name'
            label='Nome completo'
          />

          <Input
            name='avatar'
            label='Avatar'
          />

          <Input
            name='whatsapp'
            label='Whatsapp'
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input
            name='subject'
            label='Matéria'
          />

          <Input 
            name='cost'
            label='Custo da sua hora por aula (em R$)'
          />
        </fieldset>

        <fieldset>
          <legend>
            <span>Horários disponíveis</span>
            <button>+ Novo</button>
          </legend>

          <div>
            <Input
              name='week_day'
              label='Dia da semana'
            />

            <Input
              type='time'
              name='from'
              label='Das'
            />

            <Input
              type='time'
              name='to'
              label='Até'
            />
          </div>

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type='button'>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm