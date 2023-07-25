"use strict";

// const SERVER_URL = "http://localhost";
const SERVER_URL = location.protocol === "file:" ? "http://web.valloon.me" : "";

document.querySelectorAll(".link-backend").forEach(element => {
    element.href = SERVER_URL + element.getAttribute("href");
});

$("#btn-apply").click(function (e) {
    if ($(this).hasClass("disabled") || $(this).hasClass("loading")) return;
    var jobUrl = $("#job-url").val();
    var startIndex = jobUrl.indexOf("~");
    var endIndex = jobUrl.indexOf("/", startIndex);
    var jobId = endIndex == -1 ? jobUrl.substring(startIndex) : jobUrl.substring(startIndex, endIndex);
    var proposal = $("#apply-proposal").val();

    var profileSymbol = $("#profile-symbol").val();
    var emailPrefix = $("#email-prefix").val();
    var emailSuffix = $("#email-suffix").val();
    var emailAddress = emailPrefix + emailSuffix;
    var password = $("#upwork-password").val();
    var priority = $("#input-priority").val();
    var channel = $("#input-channel").val();
    if (!jobUrl || jobId.length != 19) {
        $("#job-url").focus();
        return;
    }
    if (!profileSymbol && !emailPrefix) {
        $("#profile-symbol").focus();
        return;
    }
    if (!profileSymbol && emailPrefix && !password) {
        $("#email-password").focus();
        return;
    }
    var proposalJson = {
        hourlyRate: parseInt($("#hourly-rate").val()) || undefined,
        fixedBudget: parseInt($("#fixed-budget").val()) || undefined,
        boost: parseInt($("#connet-boost").val()) || 50,
        proposal: proposal || undefined,
        questions: $.map($(".apply-question"), function (el) { return el.value; })
    };
    if (profileSymbol) {
        $.ajax({
            url: `${SERVER_URL}/api/v2/apply/$/$${profileSymbol}/${jobId}/`,
            type: "POST",
            data: {
                proposalJson: JSON.stringify(proposalJson, null, '\t'),
                priority: priority,
                channel: channel
            },
            success: function (result, status, xhr) {
                if (result.success && result.already) {
                    $("#label-result").text(`Already applied: ${result.profile}`);
                } else if (result.success) {
                    $("#job-id").val(result.jobId);
                    $("#job-url").addClass("text-danger");
                    if (result.updated)
                        $("#label-result").text(`Updated by profile: ${result.profile}`);
                    else
                        $("#label-result").text(`Applied by profile: ${result.profile}`);
                } else {
                    $("#label-result").text(`${result.error}`);
                }
                $("#btn-apply").removeClass("loading");
            },
            error: function (xhr, status, error) {
                console.warn(xhr);
                $("#label-result").text(`Error: ${status}`);
                $("#btn-apply").removeClass("loading");
            }
        });
    } else {
        $.ajax({
            url: `${SERVER_URL}/api/v2/apply/${emailAddress}/${jobId}/`,
            type: "POST",
            data: {
                password: password,
                proposalJson: JSON.stringify(proposalJson, null, '\t'),
                priority: priority,
                channel: channel
            },
            success: function (result, status, xhr) {
                if (result.success) {
                    $("#job-id").val(result.jobId);
                    $("#job-url").addClass("text-danger");
                    if (result.updated)
                        $("#label-result").text(`Updated by email`);
                    else
                        $("#label-result").text(`Applied by email`);
                } else {
                    $("#label-result").text(`${result.error}`);
                }
                $("#btn-apply").removeClass("loading");
            },
            error: function (xhr, status, error) {
                console.warn(xhr);
                $("#label-result").text(`Error: ${status}`);
                $("#btn-apply").removeClass("loading");
            }
        });
    }
    $("#label-result").text(``);
    $("#job-id").val(``);
    $("#btn-apply").addClass("loading");
});

$("#btn-delete").click(function (e) {
    if ($(this).hasClass("disabled") || $(this).hasClass("loading")) return;
    var jobUrl = $("#job-url").val();
    var startIndex = jobUrl.indexOf("~");
    var endIndex = jobUrl.indexOf("/", startIndex);
    var jobId = endIndex == -1 ? jobUrl.substring(startIndex) : jobUrl.substring(startIndex, endIndex);

    var profileSymbol = $("#profile-symbol").val();
    var emailPrefix = $("#email-prefix").val();
    var emailSuffix = $("#email-suffix").val();
    var emailAddress = emailPrefix + emailSuffix;
    if (!jobUrl || jobId.length != 19) {
        $("#job-url").focus();
        return;
    }
    if (!profileSymbol && !emailPrefix) {
        $("#profile-symbol").focus();
        return;
    }
    if (profileSymbol) {
        $.ajax({
            url: SERVER_URL + `/api/v2/apply/$/$${profileSymbol}/${jobId}/`,
            type: "DELETE",
            success: function (result, status, xhr) {
                if (result.success) {
                    $("#label-result").text(`Deleted by profile: ${result.profile}`);
                    $("#job-id").val(result.jobId);
                } else {
                    $("#label-result").text(`${result.error}`);
                }
                $("#btn-delete").removeClass("loading");
            },
            error: function (xhr, status, error) {
                console.warn(xhr);
                $("#label-result").text(`Error: ${status}`);
                $("#btn-delete").removeClass("loading");
            }
        });
    } else {
        $.ajax({
            url: SERVER_URL + `/api/v2/apply/${emailAddress}/${jobId}/`,
            type: "DELETE",
            success: function (result, status, xhr) {
                if (result.success) {
                    $("#label-result").text(`Deleted by email`);
                    $("#job-id").val(result.jobId);
                } else {
                    $("#label-result").text(`${result.error}`);
                }
                $("#btn-delete").removeClass("loading");
            },
            error: function (xhr, status, error) {
                console.warn(xhr);
                $("#label-result").text(`Error: ${status}`);
                $("#btn-delete").removeClass("loading");
            }
        });
    }
    $("#label-result").text(``);
    $("#job-id").val(``);
    $("#btn-delete").addClass("loading");
});

$("#btn-reset").click(function (e) {
    $("#job-url").val("");
    $("#hourly-rate").val("");
    $("#fixed-budget").val("");
    $("#connect-boost").val("");
    $("#apply-proposal").val("");
    $(".apply-question").val("");
    $("#job-id").val("");
    $("#label-result").text("");
});

$("#btn-retry").click(function (e) {
    if (e.ctrlKey) {
        if (!confirm(`Will clear all queue data, Really?\n${SERVER_URL}`)) return;
        $.ajax({
            url: `${SERVER_URL}/api/v2/apply/clear-queue`,
            type: "DELETE",
            success: function (result, status, xhr) {
                if (result.success) {
                    $("#label-result").text(`Queue Cleared: ${result.count}`);
                    $("#label-apply").text(``);
                } else {
                    $("#label-result").text(`${result.error}`);
                }
                $("#btn-clear-queue").removeClass("loading");
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
                $("#label-result").text(`Error: ${status}`);
                $("#btn-apply-top").removeClass("loading");
            }
        });
        $("#label-result").text(``);
        $("#label-apply").text(``);
        $("#btn-clear-queue").addClass("loading");
    } else {
        if (!confirm(`Will retry all failed queue, Really?\n${SERVER_URL}`)) return;
        $.ajax({
            url: `${SERVER_URL}/api/v2/apply/retry-queue`,
            type: "PUT",
            success: function (result, status, xhr) {
                if (result.success) {
                    $("#label-result").text(`Queue Retried: ${result.count}`);
                    $("#label-apply").text(``);
                } else {
                    $("#label-result").text(`${result.error}`);
                }
                $("#btn-clear-queue").removeClass("loading");
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
                $("#label-result").text(`Error: ${status}`);
                $("#btn-apply-top").removeClass("loading");
            }
        });
        $("#label-result").text(``);
        $("#label-apply").text(``);
        $("#btn-clear-queue").addClass("loading");
    }
});

$("#job-url").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#btn-apply").click();
    }
});

$("#job-url").on("input", function (event) {
    $("#job-url").removeClass("text-danger");
});

$("#profile-symbol").change(function (event) {
    $("#email-number").val("");
    $("#job-url").removeClass("text-danger");
});

$("#profile-symbol").on("input", function (event) {
    this.value = this.value.toLocaleUpperCase();
});

$("#profile-symbol").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#email-number").val("");
        $("#btn-apply").click();
    }
});

$("#email-number").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#btn-apply").click();
    }
});

$(document).on("keyup", function (event) {
    if (event.ctrlKey && event.keyCode === 13) {
        $("#btn-apply").click();
    }
});
