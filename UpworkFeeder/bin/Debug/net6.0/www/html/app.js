"use strict";

$("#link-config").attr("href", APPLY_SERVER + "/config");
$("#link-queue").attr("href", APPLY_SERVER + "/api/queue");
$("#link-history").attr("href", APPLY_SERVER + "/api/report");

$("#btn-login").click(function (e) {
    if ($(this).hasClass("disabled") || $(this).hasClass("loading")) return;
    var jobUrl = $("#job-url").val();
    var startIndex = jobUrl.indexOf("~");
    var endIndex = jobUrl.indexOf("/", startIndex);
    var jobId = endIndex == -1 ? jobUrl.substring(startIndex) : jobUrl.substring(startIndex, endIndex);
    var emailPrefix = $("#email-prefix").val();
    var emailCategory = $("#email-category").val();
    var emailNumber = $("#email-number").val();
    var emailSuffix = $("#email-suffix").val();
    var password = $("#upwork-password").val();
    if (!jobUrl || jobId.length != 19) {
        $("#job-url").focus();
        return;
    }
    if (!(emailCategory + emailNumber)) {
        $("#email-category").focus();
        return;
    }
    if (!emailSuffix) {
        $("#email-suffix").focus();
        return;
    }
    if (!password) {
        $("#email-password").focus();
        return;
    }

    $.ajax({
        url: ACCOUNT_SERVER + "/api/email",
        type: "GET",
        data: {
            emailPrefix: emailPrefix || undefined,
            emailCategory: emailCategory || undefined,
            emailNumber: emailNumber || undefined,
            emailSuffix: emailSuffix,
        },
        success: function (result, status, xhr) {
            if (result.success) {
                var loginJson = {
                    emailPrefix: emailPrefix || undefined,
                    emailCategory: result.emailCategory,
                    emailNumber: result.emailNumber,
                    emailSuffix: emailSuffix,
                    emailAddress: result.emailAddress,
                    jobId: jobId,
                    password: password,
                    ACCOUNT_SERVER: ACCOUNT_SERVER_REMOTE
                };
                $.ajax({
                    url: APPLY_SERVER + "/api/login",
                    type: "POST",
                    data: {
                        emailAddress: result.emailAddress,
                        jobId: jobId,
                        loginJson: JSON.stringify(loginJson)
                    },
                    success: function (result, status, xhr) {
                        if (result.success) {
                            $("#email-address").val(result.emailAddress);
                            $("#job-id").val(result.jobId);
                            $("#job-url").addClass("text-danger");
                            if (result.updated)
                                $("#label-login").text(`Updated Login (${result.queueLength})`);
                            else
                                $("#label-login").text(`Added Login (${result.queueLength})`);
                        } else {
                            $("#label-login").text(`${result.error} / ${result.loginStatus || ""} / ${result.applyStatus || ""}`);
                        }
                        $("#btn-login").removeClass("loading");
                    },
                    error: function (xhr, status, error) {
                        console.log(xhr);
                        console.log(status);
                        console.log(error);
                        $("#label-login").text(`Error: ${status}`);
                        $("#btn-login").removeClass("loading");
                    }
                });
            } else {
                $("#label-login").text(`Error: ${result.error}`);
                $("#btn-login").removeClass("loading");
            }
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            $("#label-login").text(`Error: ${status}`);
            $("#btn-login").removeClass("loading");
        }
    });
    $("#label-login").text(``);
    $("#label-apply").text(``);
    $("#email-address").val(``);
    $("#email-address").removeClass("text-danger");
    $("#job-id").val(``);
    $("#job-id").removeClass("text-danger");
    $("#btn-login").addClass("loading");
});

$("#btn-login-delete").click(function (e) {
    if ($(this).hasClass("disabled") || $(this).hasClass("loading")) return;
    var emailAddress = $("#email-address").val();
    var jobId = $("#job-id").val();
    if (!emailAddress) {
        $("#email-address").focus();
        return;
    }
    if (!jobId) {
        $("#job-id").focus();
        return;
    }
    $.ajax({
        url: APPLY_SERVER + "/api/login",
        type: "DELETE",
        data: {
            emailAddress: emailAddress,
            jobId: jobId,
        },
        success: function (result, status, xhr) {
            if (result.success) {
                $("#label-login").text(`Deleted (${result.queueLength})`);
                $("#label-apply").text(``);
                $("#email-address").val("");
                $("#email-address").removeClass("text-danger");
                $("#job-id").val("");
                $("#job-id").removeClass("text-danger");
            } else {
                $("#label-login").text(`Error: ${result.error}`);
            }
            $("#btn-login-delete").removeClass("loading");
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            $("#label-login").text(`Error: ${status}`);
            $("#btn-login-delete").removeClass("loading");
        }
    });
    $("#label-login").text(``);
    $("#btn-login-delete").addClass("loading");
});

$("#btn-apply").click(function (e) {
    if ($(this).hasClass("disabled") || $(this).hasClass("loading")) return;
    var emailAddress = $("#email-address").val();
    var jobId = $("#job-id").val();
    var proposal = $("#apply-proposal").val();
    if (!emailAddress) {
        $("#email-address").focus();
        return;
    }
    if (!jobId || jobId.length != 19) {
        $("#job-url").focus();
        return;
    }
    if (!proposal) {
        $("#apply-proposal").focus();
        return;
    }
    var applyJson = {
        jobId: jobId,
        hourlyRate: parseInt($("#hourly-rate").val()) || undefined,
        fixedBudget: parseInt($("#fixed-budget").val()) || undefined,
        boost: parseInt($("#connet-boost").val()) || 50,
        proposal: proposal,
        questions: $.map($(".apply-question"), function (el) { return el.value; })
    };
    $.ajax({
        url: APPLY_SERVER + "/api/apply",
        type: "POST",
        data: {
            emailAddress: emailAddress,
            jobId: jobId,
            applyJson: JSON.stringify(applyJson),
        },
        success: function (result, status, xhr) {
            if (result.success) {
                $("#email-address").addClass("text-danger");
                $("#job-id").addClass("text-danger");
                if (result.updated)
                    $("#label-apply").text(`Updated Apply (${result.queueLength})`);
                else
                    $("#label-apply").text(`Added Apply (${result.queueLength})`);
            } else {
                $("#label-apply").text(`Error: ${result.error}`);
            }
            $("#btn-apply").removeClass("loading");
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            $("#label-apply").text(`Error: ${status}`);
            $("#btn-apply").removeClass("loading");
        }
    });
    $("#label-apply").text(``);
    $("#btn-apply").addClass("loading");
});

$("#btn-apply-delete").click(function (e) {
    if ($(this).hasClass("disabled") || $(this).hasClass("loading")) return;
    var emailAddress = $("#email-address").val();
    var jobId = $("#job-id").val();
    if (!emailAddress) {
        $("#email-address").focus();
        return;
    }
    if (!jobId || jobId.length != 19) {
        $("#job-url").focus();
        return;
    }
    $.ajax({
        url: APPLY_SERVER + "/api/apply",
        type: "DELETE",
        data: {
            emailAddress: emailAddress,
            jobId: jobId,
        },
        success: function (result, status, xhr) {
            if (result.success) {
                $("#label-apply").text(`Deleted ${result.applied} (${result.queueLength})`);
            } else {
                $("#label-apply").text(`Error: ${result.error}`);
            }
            $("#btn-apply-delete").removeClass("loading");
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            $("#label-apply").text(`Error: ${status}`);
            $("#btn-apply-top").removeClass("loading");
        }
    });
    $("#label-apply").text(``);
    $("#btn-apply-delete").addClass("loading");
});

$("#btn-reset").click(function (e) {
    $("#job-url").val("");
    $("#hourly-rate").val("");
    $("#fixed-budget").val("");
    $("#connect-boost").val("");
    $("#apply-proposal").val("");
    $(".apply-question").val("");
    $("#email-address").val("");
    $("#job-id").val("");
    $("#label-login").text("");
    $("#label-apply").text("");
});

$("#btn-clear-queue").click(function (e) {
    if (!confirm("Will clear all queue data, Really?")) return;
    $.ajax({
        url: APPLY_SERVER + "/api/queue",
        type: "DELETE",
        success: function (result, status, xhr) {
            if (result.success) {
                $("#label-login").text(`Cleared ${result.count}`);
                $("#label-apply").text(``);
            } else {
                $("#label-login").text(`${result.error}`);
            }
            $("#btn-clear-queue").removeClass("loading");
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            $("#label-login").text(`Error: ${status}`);
            $("#btn-apply-top").removeClass("loading");
        }
    });
    $("#label-login").text(``);
    $("#label-apply").text(``);
    $("#btn-clear-queue").addClass("loading");
});

$("#job-url").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#btn-login").click();
    }
});

$("#job-url").on("input", function (event) {
    $("#job-url").removeClass("text-danger");
});

$("#email-category").change(function (event) {
    $("#email-number").val("");
    $("#job-url").removeClass("text-danger");
});

$("#email-category").on("input", function (event) {
    this.value = this.value.toLocaleUpperCase();
});

$("#email-category").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#email-number").val("");
        $("#btn-login").click();
    }
});

$("#email-number").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#btn-login").click();
    }
});

$(document).on("keyup", function (event) {
    if (event.ctrlKey && event.keyCode === 13) {
        $("#btn-apply").click();
    }
});

