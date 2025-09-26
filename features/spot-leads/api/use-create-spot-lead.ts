import { z } from 'zod'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { createSpotLeadSchema } from '../schemas'

export function useCreateSpotLead() {
  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof createSpotLeadSchema>) => {
      await api.post('/matra/leads/create-2', {
        ...values,
        origin: 'JEREMIAS-MATRA-MARKETING',
        whatsappGroup:
          'https://wa.me/554384778544?text=Ol%C3%A1%2C%20quero%20multiplicar%20minhas%20vendas%20com%20marketing%20digital!',
        messages: [
          'Opa! tudo bem? 😊',
          'Vi que demonstrou interesse no nosso serviço! 🤝',
          'Como posso te ajudar a multiplicar suas vendas?',
        ],
      })
      return
    },
    onSuccess: () => {
      toast.success(
        'Formulário enviado com sucesso! Aguarde o redirecionamento.',
        {
          id: 'create-spot-lead-success',
        },
      )
    },
    onError: error => {
      switch (error.message) {
        case 'Invalid parameters':
          toast.error(
            'Ocorreu um erro ao enviar o formulário. Tente novamente.',
            {
              id: 'create-spot-lead-error',
            },
          )
          break
        default:
          toast.error(
            'Ocorreu um erro ao enviar o formulário. Tente novamente.',
            {
              id: 'create-spot-lead-error',
            },
          )
          break
      }
    },
  })

  return mutation
}
