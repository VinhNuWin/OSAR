import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const reportApi = createApi({
    reducerPath: 'registry',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    endpoints(builder) {
        return {
            addReport: builder.mutation({
                query: (report) => {
                    return {
                        url: '/registry',
                        method: 'POST',
                        body: {
                            email: report.email
                        },
                    }
                }
            }),
            fetchReport: builder.query({
                query: (newReport) => {
                    return {
                        url: '/registry',
                        params: {
                            reportId: newReport.id
                        },
                    method: 'GET',
                };
                }
            })
        }
    }
});

export const { useFetchReportQuery, useAddReportMutation } = reportApi;
export { reportApi };