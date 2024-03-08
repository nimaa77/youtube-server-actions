export default function InputError({
  error,
}: {
  error: string
}) {
  return (
    <span className="text-red-400 mt-2">
      {error}
    </span>
  )
}
