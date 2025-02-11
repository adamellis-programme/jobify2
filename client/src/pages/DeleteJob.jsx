// we submit to this page with the id as a param
import { redirect } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export async function action({ params }) {
  console.log(params)
  try {
    await customFetch.delete(`/jobs/${params.id}`)
    toast.success('Job deleted successfully')
  } catch (error) {
    toast.error(error.response.data.msg)
  }

  // if successfull or not redirect
  return redirect('/dashboard/all-jobs')
  // return null
}
