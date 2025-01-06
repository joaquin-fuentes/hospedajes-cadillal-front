import dayjs from "dayjs";

/**
 * Hook para formatear fechas.
 * @param {string} dateString - Fecha en formato ISO (por ejemplo, "2025-01-04T00:00:00.000Z")
 * @returns {string} - Fecha formateada en formato "dd-mm-aaaa"
 */
const useFormatDate = (dateString) => {
  if (!dateString) return "Fecha no disponible";
  const formattedDate = dayjs(dateString).format("DD-MM-YYYY");
  return formattedDate;
};

export default useFormatDate;
