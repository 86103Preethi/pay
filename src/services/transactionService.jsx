// src/api/transactionService.js
import apiClient from "./apiClient";

export const getTransactionHistory = (serviceId, page) =>
  apiClient.get(`/transaction_history`, {
    params: { service_id: serviceId, page },
});
